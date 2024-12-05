# `dataOciContainerengineNodePool` Submodule <a name="`dataOciContainerengineNodePool` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineNodePool <a name="DataOciContainerengineNodePool" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pool oci_containerengine_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePool(scope Construct, id *string, config DataOciContainerengineNodePoolConfig) DataOciContainerengineNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig">DataOciContainerengineNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig">DataOciContainerengineNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.DataOciContainerengineNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.DataOciContainerengineNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.DataOciContainerengineNodePool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.DataOciContainerengineNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciContainerengineNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciContainerengineNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciContainerengineNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.initialNodeLabels">InitialNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList">DataOciContainerengineNodePoolInitialNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeConfigDetails">NodeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList">DataOciContainerengineNodePoolNodeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeEvictionNodePoolSettings">NodeEvictionNodePoolSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeImageId">NodeImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeImageName">NodeImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeMetadata">NodeMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodePoolCyclingDetails">NodePoolCyclingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList">DataOciContainerengineNodePoolNodePoolCyclingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList">DataOciContainerengineNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeShape">NodeShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeShapeConfig">NodeShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList">DataOciContainerengineNodePoolNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeSource">NodeSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList">DataOciContainerengineNodePoolNodeSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeSourceDetails">NodeSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList">DataOciContainerengineNodePoolNodeSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.quantityPerSubnet">QuantityPerSubnet</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodePoolIdInput">NodePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodePoolId">NodePoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialNodeLabels`<sup>Required</sup> <a name="InitialNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.initialNodeLabels"></a>

```go
func InitialNodeLabels() DataOciContainerengineNodePoolInitialNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList">DataOciContainerengineNodePoolInitialNodeLabelsList</a>

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeConfigDetails`<sup>Required</sup> <a name="NodeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeConfigDetails"></a>

```go
func NodeConfigDetails() DataOciContainerengineNodePoolNodeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList">DataOciContainerengineNodePoolNodeConfigDetailsList</a>

---

##### `NodeEvictionNodePoolSettings`<sup>Required</sup> <a name="NodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeEvictionNodePoolSettings"></a>

```go
func NodeEvictionNodePoolSettings() DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList</a>

---

##### `NodeImageId`<sup>Required</sup> <a name="NodeImageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeImageId"></a>

```go
func NodeImageId() *string
```

- *Type:* *string

---

##### `NodeImageName`<sup>Required</sup> <a name="NodeImageName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeImageName"></a>

```go
func NodeImageName() *string
```

- *Type:* *string

---

##### `NodeMetadata`<sup>Required</sup> <a name="NodeMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeMetadata"></a>

```go
func NodeMetadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `NodePoolCyclingDetails`<sup>Required</sup> <a name="NodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodePoolCyclingDetails"></a>

```go
func NodePoolCyclingDetails() DataOciContainerengineNodePoolNodePoolCyclingDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList">DataOciContainerengineNodePoolNodePoolCyclingDetailsList</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodes"></a>

```go
func Nodes() DataOciContainerengineNodePoolNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList">DataOciContainerengineNodePoolNodesList</a>

---

##### `NodeShape`<sup>Required</sup> <a name="NodeShape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeShape"></a>

```go
func NodeShape() *string
```

- *Type:* *string

---

##### `NodeShapeConfig`<sup>Required</sup> <a name="NodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeShapeConfig"></a>

```go
func NodeShapeConfig() DataOciContainerengineNodePoolNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList">DataOciContainerengineNodePoolNodeShapeConfigList</a>

---

##### `NodeSource`<sup>Required</sup> <a name="NodeSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeSource"></a>

```go
func NodeSource() DataOciContainerengineNodePoolNodeSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList">DataOciContainerengineNodePoolNodeSourceList</a>

---

##### `NodeSourceDetails`<sup>Required</sup> <a name="NodeSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodeSourceDetails"></a>

```go
func NodeSourceDetails() DataOciContainerengineNodePoolNodeSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList">DataOciContainerengineNodePoolNodeSourceDetailsList</a>

---

##### `QuantityPerSubnet`<sup>Required</sup> <a name="QuantityPerSubnet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.quantityPerSubnet"></a>

```go
func QuantityPerSubnet() *f64
```

- *Type:* *f64

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `NodePoolIdInput`<sup>Optional</sup> <a name="NodePoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodePoolIdInput"></a>

```go
func NodePoolIdInput() *string
```

- *Type:* *string

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.nodePoolId"></a>

```go
func NodePoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineNodePoolConfig <a name="DataOciContainerengineNodePoolConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NodePoolId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.nodePoolId">NodePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pool#node_pool_id DataOciContainerengineNodePool#node_pool_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolConfig.property.nodePoolId"></a>

```go
NodePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pool#node_pool_id DataOciContainerengineNodePool#node_pool_id}.

---

### DataOciContainerengineNodePoolInitialNodeLabels <a name="DataOciContainerengineNodePoolInitialNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolInitialNodeLabels {

}
```


### DataOciContainerengineNodePoolNodeConfigDetails <a name="DataOciContainerengineNodePoolNodeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeConfigDetails {

}
```


### DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails <a name="DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails {

}
```


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs {

}
```


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig {

}
```


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction {

}
```


### DataOciContainerengineNodePoolNodeEvictionNodePoolSettings <a name="DataOciContainerengineNodePoolNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettings {

}
```


### DataOciContainerengineNodePoolNodePoolCyclingDetails <a name="DataOciContainerengineNodePoolNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodePoolCyclingDetails {

}
```


### DataOciContainerengineNodePoolNodes <a name="DataOciContainerengineNodePoolNodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodes {

}
```


### DataOciContainerengineNodePoolNodesError <a name="DataOciContainerengineNodePoolNodesError" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesError"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesError.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodesError {

}
```


### DataOciContainerengineNodePoolNodeShapeConfig <a name="DataOciContainerengineNodePoolNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeShapeConfig {

}
```


### DataOciContainerengineNodePoolNodeSource <a name="DataOciContainerengineNodePoolNodeSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeSource {

}
```


### DataOciContainerengineNodePoolNodeSourceDetails <a name="DataOciContainerengineNodePoolNodeSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

&dataocicontainerenginenodepool.DataOciContainerengineNodePoolNodeSourceDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineNodePoolInitialNodeLabelsList <a name="DataOciContainerengineNodePoolInitialNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolInitialNodeLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolInitialNodeLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolInitialNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolInitialNodeLabelsOutputReference <a name="DataOciContainerengineNodePoolInitialNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolInitialNodeLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolInitialNodeLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabels">DataOciContainerengineNodePoolInitialNodeLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolInitialNodeLabels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolInitialNodeLabels">DataOciContainerengineNodePoolInitialNodeLabels</a>

---


### DataOciContainerengineNodePoolNodeConfigDetailsList <a name="DataOciContainerengineNodePoolNodeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList <a name="DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference <a name="DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType">CniType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds">PodNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds">PodSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CniType`<sup>Required</sup> <a name="CniType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType"></a>

```go
func CniType() *string
```

- *Type:* *string

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `PodNsgIds`<sup>Required</sup> <a name="PodNsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds"></a>

```go
func PodNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PodSubnetIds`<sup>Required</sup> <a name="PodSubnetIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds"></a>

```go
func PodSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---


### DataOciContainerengineNodePoolNodeConfigDetailsOutputReference <a name="DataOciContainerengineNodePoolNodeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails">NodePoolPodNetworkOptionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs">PlacementConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetails">DataOciContainerengineNodePoolNodeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `NodePoolPodNetworkOptionDetails`<sup>Required</sup> <a name="NodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails"></a>

```go
func NodePoolPodNetworkOptionDetails() DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PlacementConfigs`<sup>Required</sup> <a name="PlacementConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs"></a>

```go
func PlacementConfigs() DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetails">DataOciContainerengineNodePoolNodeConfigDetails</a>

---


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig">PreemptibleNodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains"></a>

```go
func FaultDomains() *[]*string
```

- *Type:* *[]*string

---

##### `PreemptibleNodeConfig`<sup>Required</sup> <a name="PreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig"></a>

```go
func PreemptibleNodeConfig() DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigs</a>

---


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction"></a>

```go
func PreemptionAction() DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference <a name="DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume">IsPreserveBootVolume</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsPreserveBootVolume`<sup>Required</sup> <a name="IsPreserveBootVolume" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume"></a>

```go
func IsPreserveBootVolume() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


### DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList <a name="DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference <a name="DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration">EvictionGraceDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration">IsForceDeleteAfterGraceDuration</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvictionGraceDuration`<sup>Required</sup> <a name="EvictionGraceDuration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration"></a>

```go
func EvictionGraceDuration() *string
```

- *Type:* *string

---

##### `IsForceDeleteAfterGraceDuration`<sup>Required</sup> <a name="IsForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration"></a>

```go
func IsForceDeleteAfterGraceDuration() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---


### DataOciContainerengineNodePoolNodePoolCyclingDetailsList <a name="DataOciContainerengineNodePoolNodePoolCyclingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodePoolCyclingDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodePoolCyclingDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference <a name="DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled">IsNodeCyclingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge">MaximumSurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable">MaximumUnavailable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetails">DataOciContainerengineNodePoolNodePoolCyclingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsNodeCyclingEnabled`<sup>Required</sup> <a name="IsNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled"></a>

```go
func IsNodeCyclingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaximumSurge`<sup>Required</sup> <a name="MaximumSurge" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge"></a>

```go
func MaximumSurge() *string
```

- *Type:* *string

---

##### `MaximumUnavailable`<sup>Required</sup> <a name="MaximumUnavailable" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable"></a>

```go
func MaximumUnavailable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodePoolCyclingDetails">DataOciContainerengineNodePoolNodePoolCyclingDetails</a>

---


### DataOciContainerengineNodePoolNodesErrorList <a name="DataOciContainerengineNodePoolNodesErrorList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodesErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodesErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodesErrorOutputReference <a name="DataOciContainerengineNodePoolNodesErrorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodesErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodesErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesError">DataOciContainerengineNodePoolNodesError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodesError
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesError">DataOciContainerengineNodePoolNodesError</a>

---


### DataOciContainerengineNodePoolNodeShapeConfigList <a name="DataOciContainerengineNodePoolNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeShapeConfigOutputReference <a name="DataOciContainerengineNodePoolNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfig">DataOciContainerengineNodePoolNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeShapeConfig">DataOciContainerengineNodePoolNodeShapeConfig</a>

---


### DataOciContainerengineNodePoolNodesList <a name="DataOciContainerengineNodePoolNodesList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeSourceDetailsList <a name="DataOciContainerengineNodePoolNodeSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeSourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeSourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeSourceDetailsOutputReference <a name="DataOciContainerengineNodePoolNodeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetails">DataOciContainerengineNodePoolNodeSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootVolumeSizeInGbs`<sup>Required</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```go
func BootVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceDetails">DataOciContainerengineNodePoolNodeSourceDetails</a>

---


### DataOciContainerengineNodePoolNodeSourceList <a name="DataOciContainerengineNodePoolNodeSourceList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineNodePoolNodeSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.get"></a>

```go
func Get(index *f64) DataOciContainerengineNodePoolNodeSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineNodePoolNodeSourceOutputReference <a name="DataOciContainerengineNodePoolNodeSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodeSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodeSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSource">DataOciContainerengineNodePoolNodeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodeSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodeSource">DataOciContainerengineNodePoolNodeSource</a>

---


### DataOciContainerengineNodePoolNodesOutputReference <a name="DataOciContainerengineNodePoolNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginenodepool"

dataocicontainerenginenodepool.NewDataOciContainerengineNodePoolNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineNodePoolNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.error">Error</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList">DataOciContainerengineNodePoolNodesErrorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.nodePoolId">NodePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodes">DataOciContainerengineNodePoolNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.error"></a>

```go
func Error() DataOciContainerengineNodePoolNodesErrorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesErrorList">DataOciContainerengineNodePoolNodesErrorList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.nodePoolId"></a>

```go
func NodePoolId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineNodePoolNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePool.DataOciContainerengineNodePoolNodes">DataOciContainerengineNodePoolNodes</a>

---



