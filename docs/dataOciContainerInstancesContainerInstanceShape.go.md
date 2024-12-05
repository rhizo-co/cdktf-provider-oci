# `dataOciContainerInstancesContainerInstanceShape` Submodule <a name="`dataOciContainerInstancesContainerInstanceShape` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstanceShape <a name="DataOciContainerInstancesContainerInstanceShape" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape oci_container_instances_container_instance_shape}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShape(scope Construct, id *string, config DataOciContainerInstancesContainerInstanceShapeConfigA) DataOciContainerInstancesContainerInstanceShape
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA">DataOciContainerInstancesContainerInstanceShapeConfigA</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA">DataOciContainerInstancesContainerInstanceShapeConfigA</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShape resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShape_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShape_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShape_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShape_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstanceShape resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciContainerInstancesContainerInstanceShape to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciContainerInstancesContainerInstanceShape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstanceShape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList">DataOciContainerInstancesContainerInstanceShapeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.items"></a>

```go
func Items() DataOciContainerInstancesContainerInstanceShapeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList">DataOciContainerInstancesContainerInstanceShapeItemsList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShape.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceShapeConfigA <a name="DataOciContainerInstancesContainerInstanceShapeConfigA" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

&dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShapeConfigA {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AvailabilityDomain: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#compartment_id DataOciContainerInstancesContainerInstanceShape#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#availability_domain DataOciContainerInstancesContainerInstanceShape#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#id DataOciContainerInstancesContainerInstanceShape#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#compartment_id DataOciContainerInstancesContainerInstanceShape#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#availability_domain DataOciContainerInstancesContainerInstanceShape#availability_domain}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeConfigA.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance_shape#id DataOciContainerInstancesContainerInstanceShape#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerInstancesContainerInstanceShapeItems <a name="DataOciContainerInstancesContainerInstanceShapeItems" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

&dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShapeItems {

}
```


### DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions <a name="DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

&dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions {

}
```


### DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions <a name="DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

&dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions {

}
```


### DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions <a name="DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

&dataocicontainerinstancescontainerinstanceshape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceShapeItemsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceShapeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs">DefaultPerOcpuInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxInGbs">MaxInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs">MaxPerOcpuInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minInGbs">MinInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs">MinPerOcpuInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPerOcpuInGbs`<sup>Required</sup> <a name="DefaultPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.defaultPerOcpuInGbs"></a>

```go
func DefaultPerOcpuInGbs() *f64
```

- *Type:* *f64

---

##### `MaxInGbs`<sup>Required</sup> <a name="MaxInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxInGbs"></a>

```go
func MaxInGbs() *f64
```

- *Type:* *f64

---

##### `MaxPerOcpuInGbs`<sup>Required</sup> <a name="MaxPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.maxPerOcpuInGbs"></a>

```go
func MaxPerOcpuInGbs() *f64
```

- *Type:* *f64

---

##### `MinInGbs`<sup>Required</sup> <a name="MinInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minInGbs"></a>

```go
func MinInGbs() *f64
```

- *Type:* *f64

---

##### `MinPerOcpuInGbs`<sup>Required</sup> <a name="MinPerOcpuInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.minPerOcpuInGbs"></a>

```go
func MinPerOcpuInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps">DefaultPerOcpuInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps">MaxInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps">MinInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultPerOcpuInGbps`<sup>Required</sup> <a name="DefaultPerOcpuInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.defaultPerOcpuInGbps"></a>

```go
func DefaultPerOcpuInGbps() *f64
```

- *Type:* *f64

---

##### `MaxInGbps`<sup>Required</sup> <a name="MaxInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.maxInGbps"></a>

```go
func MaxInGbps() *f64
```

- *Type:* *f64

---

##### `MinInGbps`<sup>Required</sup> <a name="MinInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.minInGbps"></a>

```go
func MinInGbps() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList <a name="DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptions</a>

---


### DataOciContainerInstancesContainerInstanceShapeItemsOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstanceshape"

dataocicontainerinstancescontainerinstanceshape.NewDataOciContainerInstancesContainerInstanceShapeItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceShapeItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.memoryOptions">MemoryOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.networkingBandwidthOptions">NetworkingBandwidthOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.ocpuOptions">OcpuOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems">DataOciContainerInstancesContainerInstanceShapeItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryOptions`<sup>Required</sup> <a name="MemoryOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.memoryOptions"></a>

```go
func MemoryOptions() DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsMemoryOptionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkingBandwidthOptions`<sup>Required</sup> <a name="NetworkingBandwidthOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.networkingBandwidthOptions"></a>

```go
func NetworkingBandwidthOptions() DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsNetworkingBandwidthOptionsList</a>

---

##### `OcpuOptions`<sup>Required</sup> <a name="OcpuOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.ocpuOptions"></a>

```go
func OcpuOptions() DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList">DataOciContainerInstancesContainerInstanceShapeItemsOcpuOptionsList</a>

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.processorDescription"></a>

```go
func ProcessorDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceShapeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstanceShape.DataOciContainerInstancesContainerInstanceShapeItems">DataOciContainerInstancesContainerInstanceShapeItems</a>

---



