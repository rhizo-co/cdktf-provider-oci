# `dataOciContainerInstancesContainerInstance` Submodule <a name="`dataOciContainerInstancesContainerInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerInstancesContainerInstance <a name="DataOciContainerInstancesContainerInstance" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance oci_container_instances_container_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstance(scope Construct, id *string, config DataOciContainerInstancesContainerInstanceConfig) DataOciContainerInstancesContainerInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig">DataOciContainerInstancesContainerInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig">DataOciContainerInstancesContainerInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstance_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciContainerInstancesContainerInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciContainerInstancesContainerInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciContainerInstancesContainerInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerInstancesContainerInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerCount">ContainerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerRestartPolicy">ContainerRestartPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containers">Containers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList">DataOciContainerInstancesContainerInstanceContainersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dnsConfig">DnsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList">DataOciContainerInstancesContainerInstanceDnsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds">GracefulShutdownTimeoutInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.imagePullSecrets">ImagePullSecrets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList">DataOciContainerInstancesContainerInstanceImagePullSecretsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList">DataOciContainerInstancesContainerInstanceShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.vnics">Vnics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList">DataOciContainerInstancesContainerInstanceVnicsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumeCount">VolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumes">Volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList">DataOciContainerInstancesContainerInstanceVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceIdInput">ContainerInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceId">ContainerInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContainerCount`<sup>Required</sup> <a name="ContainerCount" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerCount"></a>

```go
func ContainerCount() *f64
```

- *Type:* *f64

---

##### `ContainerRestartPolicy`<sup>Required</sup> <a name="ContainerRestartPolicy" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerRestartPolicy"></a>

```go
func ContainerRestartPolicy() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containers"></a>

```go
func Containers() DataOciContainerInstancesContainerInstanceContainersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList">DataOciContainerInstancesContainerInstanceContainersList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsConfig`<sup>Required</sup> <a name="DnsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.dnsConfig"></a>

```go
func DnsConfig() DataOciContainerInstancesContainerInstanceDnsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList">DataOciContainerInstancesContainerInstanceDnsConfigList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GracefulShutdownTimeoutInSeconds`<sup>Required</sup> <a name="GracefulShutdownTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.gracefulShutdownTimeoutInSeconds"></a>

```go
func GracefulShutdownTimeoutInSeconds() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImagePullSecrets`<sup>Required</sup> <a name="ImagePullSecrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.imagePullSecrets"></a>

```go
func ImagePullSecrets() DataOciContainerInstancesContainerInstanceImagePullSecretsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList">DataOciContainerInstancesContainerInstanceImagePullSecretsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciContainerInstancesContainerInstanceShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList">DataOciContainerInstancesContainerInstanceShapeConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Vnics`<sup>Required</sup> <a name="Vnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.vnics"></a>

```go
func Vnics() DataOciContainerInstancesContainerInstanceVnicsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList">DataOciContainerInstancesContainerInstanceVnicsList</a>

---

##### `VolumeCount`<sup>Required</sup> <a name="VolumeCount" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumeCount"></a>

```go
func VolumeCount() *f64
```

- *Type:* *f64

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.volumes"></a>

```go
func Volumes() DataOciContainerInstancesContainerInstanceVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList">DataOciContainerInstancesContainerInstanceVolumesList</a>

---

##### `ContainerInstanceIdInput`<sup>Optional</sup> <a name="ContainerInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceIdInput"></a>

```go
func ContainerInstanceIdInput() *string
```

- *Type:* *string

---

##### `ContainerInstanceId`<sup>Required</sup> <a name="ContainerInstanceId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.containerInstanceId"></a>

```go
func ContainerInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerInstancesContainerInstanceConfig <a name="DataOciContainerInstancesContainerInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerInstanceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.containerInstanceId">ContainerInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerInstanceId`<sup>Required</sup> <a name="ContainerInstanceId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceConfig.property.containerInstanceId"></a>

```go
ContainerInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/container_instances_container_instance#container_instance_id DataOciContainerInstancesContainerInstance#container_instance_id}.

---

### DataOciContainerInstancesContainerInstanceContainers <a name="DataOciContainerInstancesContainerInstanceContainers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceContainers {

}
```


### DataOciContainerInstancesContainerInstanceContainersHealthChecks <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks {

}
```


### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders {

}
```


### DataOciContainerInstancesContainerInstanceContainersResourceConfig <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig {

}
```


### DataOciContainerInstancesContainerInstanceContainersSecurityContext <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContext" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext {

}
```


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities {

}
```


### DataOciContainerInstancesContainerInstanceContainersVolumeMounts <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts {

}
```


### DataOciContainerInstancesContainerInstanceDnsConfig <a name="DataOciContainerInstancesContainerInstanceDnsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceDnsConfig {

}
```


### DataOciContainerInstancesContainerInstanceImagePullSecrets <a name="DataOciContainerInstancesContainerInstanceImagePullSecrets" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceImagePullSecrets {

}
```


### DataOciContainerInstancesContainerInstanceShapeConfig <a name="DataOciContainerInstancesContainerInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceShapeConfig {

}
```


### DataOciContainerInstancesContainerInstanceVnics <a name="DataOciContainerInstancesContainerInstanceVnics" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceVnics {

}
```


### DataOciContainerInstancesContainerInstanceVolumes <a name="DataOciContainerInstancesContainerInstanceVolumes" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceVolumes {

}
```


### DataOciContainerInstancesContainerInstanceVolumesConfigs <a name="DataOciContainerInstancesContainerInstanceVolumesConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

&dataocicontainerinstancescontainerinstance.DataOciContainerInstancesContainerInstanceVolumesConfigs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeaders</a>

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksList <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersHealthChecksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceContainersHealthChecksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction">FailureAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers">Headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType">HealthCheckType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds">InitialDelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds">IntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold">SuccessThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks">DataOciContainerInstancesContainerInstanceContainersHealthChecks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `FailureAction`<sup>Required</sup> <a name="FailureAction" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureAction"></a>

```go
func FailureAction() *string
```

- *Type:* *string

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.headers"></a>

```go
func Headers() DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList">DataOciContainerInstancesContainerInstanceContainersHealthChecksHeadersList</a>

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.healthCheckType"></a>

```go
func HealthCheckType() *string
```

- *Type:* *string

---

##### `InitialDelayInSeconds`<sup>Required</sup> <a name="InitialDelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.initialDelayInSeconds"></a>

```go
func InitialDelayInSeconds() *f64
```

- *Type:* *f64

---

##### `IntervalInSeconds`<sup>Required</sup> <a name="IntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.intervalInSeconds"></a>

```go
func IntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `SuccessThreshold`<sup>Required</sup> <a name="SuccessThreshold" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.successThreshold"></a>

```go
func SuccessThreshold() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceContainersHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecks">DataOciContainerInstancesContainerInstanceContainersHealthChecks</a>

---


### DataOciContainerInstancesContainerInstanceContainersList <a name="DataOciContainerInstancesContainerInstanceContainersList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceContainersOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerId">ContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId">ContainerInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.exitCode">ExitCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks">HealthChecks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList">DataOciContainerInstancesContainerInstanceContainersHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled">IsResourcePrincipalDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig">ResourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList">DataOciContainerInstancesContainerInstanceContainersResourceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.securityContext">SecurityContext</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList">DataOciContainerInstancesContainerInstanceContainersSecurityContextList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated">TimeTerminated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList">DataOciContainerInstancesContainerInstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory">WorkingDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers">DataOciContainerInstancesContainerInstanceContainers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerId"></a>

```go
func ContainerId() *string
```

- *Type:* *string

---

##### `ContainerInstanceId`<sup>Required</sup> <a name="ContainerInstanceId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.containerInstanceId"></a>

```go
func ContainerInstanceId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExitCode`<sup>Required</sup> <a name="ExitCode" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.exitCode"></a>

```go
func ExitCode() *f64
```

- *Type:* *f64

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.healthChecks"></a>

```go
func HealthChecks() DataOciContainerInstancesContainerInstanceContainersHealthChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersHealthChecksList">DataOciContainerInstancesContainerInstanceContainersHealthChecksList</a>

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `IsResourcePrincipalDisabled`<sup>Required</sup> <a name="IsResourcePrincipalDisabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.isResourcePrincipalDisabled"></a>

```go
func IsResourcePrincipalDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ResourceConfig`<sup>Required</sup> <a name="ResourceConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.resourceConfig"></a>

```go
func ResourceConfig() DataOciContainerInstancesContainerInstanceContainersResourceConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList">DataOciContainerInstancesContainerInstanceContainersResourceConfigList</a>

---

##### `SecurityContext`<sup>Required</sup> <a name="SecurityContext" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.securityContext"></a>

```go
func SecurityContext() DataOciContainerInstancesContainerInstanceContainersSecurityContextList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList">DataOciContainerInstancesContainerInstanceContainersSecurityContextList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeTerminated`<sup>Required</sup> <a name="TimeTerminated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeTerminated"></a>

```go
func TimeTerminated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() DataOciContainerInstancesContainerInstanceContainersVolumeMountsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList">DataOciContainerInstancesContainerInstanceContainersVolumeMountsList</a>

---

##### `WorkingDirectory`<sup>Required</sup> <a name="WorkingDirectory" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.workingDirectory"></a>

```go
func WorkingDirectory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceContainers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainers">DataOciContainerInstancesContainerInstanceContainers</a>

---


### DataOciContainerInstancesContainerInstanceContainersResourceConfigList <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersResourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceContainersResourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs">MemoryLimitInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit">VcpusLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig">DataOciContainerInstancesContainerInstanceContainersResourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryLimitInGbs`<sup>Required</sup> <a name="MemoryLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.memoryLimitInGbs"></a>

```go
func MemoryLimitInGbs() *f64
```

- *Type:* *f64

---

##### `VcpusLimit`<sup>Required</sup> <a name="VcpusLimit" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.vcpusLimit"></a>

```go
func VcpusLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceContainersResourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersResourceConfig">DataOciContainerInstancesContainerInstanceContainersResourceConfig</a>

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities">AddCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities">DropCapabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddCapabilities`<sup>Required</sup> <a name="AddCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.addCapabilities"></a>

```go
func AddCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `DropCapabilities`<sup>Required</sup> <a name="DropCapabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.dropCapabilities"></a>

```go
func DropCapabilities() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilities</a>

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextList <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersSecurityContextList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceContainersSecurityContextList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities">Capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled">IsNonRootUserCheckEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly">IsRootFileSystemReadonly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup">RunAsGroup</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser">RunAsUser</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType">SecurityContextType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext">DataOciContainerInstancesContainerInstanceContainersSecurityContext</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.capabilities"></a>

```go
func Capabilities() DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList">DataOciContainerInstancesContainerInstanceContainersSecurityContextCapabilitiesList</a>

---

##### `IsNonRootUserCheckEnabled`<sup>Required</sup> <a name="IsNonRootUserCheckEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isNonRootUserCheckEnabled"></a>

```go
func IsNonRootUserCheckEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRootFileSystemReadonly`<sup>Required</sup> <a name="IsRootFileSystemReadonly" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.isRootFileSystemReadonly"></a>

```go
func IsRootFileSystemReadonly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RunAsGroup`<sup>Required</sup> <a name="RunAsGroup" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsGroup"></a>

```go
func RunAsGroup() *f64
```

- *Type:* *f64

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.runAsUser"></a>

```go
func RunAsUser() *f64
```

- *Type:* *f64

---

##### `SecurityContextType`<sup>Required</sup> <a name="SecurityContextType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.securityContextType"></a>

```go
func SecurityContextType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContextOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceContainersSecurityContext
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersSecurityContext">DataOciContainerInstancesContainerInstanceContainersSecurityContext</a>

---


### DataOciContainerInstancesContainerInstanceContainersVolumeMountsList <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMountsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference <a name="DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition">Partition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts">DataOciContainerInstancesContainerInstanceContainersVolumeMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.isReadOnly"></a>

```go
func IsReadOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.partition"></a>

```go
func Partition() *f64
```

- *Type:* *f64

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```go
func SubPath() *string
```

- *Type:* *string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceContainersVolumeMounts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceContainersVolumeMounts">DataOciContainerInstancesContainerInstanceContainersVolumeMounts</a>

---


### DataOciContainerInstancesContainerInstanceDnsConfigList <a name="DataOciContainerInstancesContainerInstanceDnsConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceDnsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceDnsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceDnsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceDnsConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceDnsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceDnsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceDnsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers">Nameservers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.options">Options</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches">Searches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig">DataOciContainerInstancesContainerInstanceDnsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nameservers`<sup>Required</sup> <a name="Nameservers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.nameservers"></a>

```go
func Nameservers() *[]*string
```

- *Type:* *[]*string

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.options"></a>

```go
func Options() *[]*string
```

- *Type:* *[]*string

---

##### `Searches`<sup>Required</sup> <a name="Searches" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.searches"></a>

```go
func Searches() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceDnsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceDnsConfig">DataOciContainerInstancesContainerInstanceDnsConfig</a>

---


### DataOciContainerInstancesContainerInstanceImagePullSecretsList <a name="DataOciContainerInstancesContainerInstanceImagePullSecretsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceImagePullSecretsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceImagePullSecretsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference <a name="DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint">RegistryEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType">SecretType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets">DataOciContainerInstancesContainerInstanceImagePullSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `RegistryEndpoint`<sup>Required</sup> <a name="RegistryEndpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.registryEndpoint"></a>

```go
func RegistryEndpoint() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SecretType`<sup>Required</sup> <a name="SecretType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.secretType"></a>

```go
func SecretType() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecretsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceImagePullSecrets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceImagePullSecrets">DataOciContainerInstancesContainerInstanceImagePullSecrets</a>

---


### DataOciContainerInstancesContainerInstanceShapeConfigList <a name="DataOciContainerInstancesContainerInstanceShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceShapeConfigOutputReference <a name="DataOciContainerInstancesContainerInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig">DataOciContainerInstancesContainerInstanceShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```go
func NetworkingBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.processorDescription"></a>

```go
func ProcessorDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceShapeConfig">DataOciContainerInstancesContainerInstanceShapeConfig</a>

---


### DataOciContainerInstancesContainerInstanceVnicsList <a name="DataOciContainerInstancesContainerInstanceVnicsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceVnicsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceVnicsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceVnicsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceVnicsOutputReference <a name="DataOciContainerInstancesContainerInstanceVnicsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceVnicsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceVnicsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned">IsPublicIpAssigned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId">VnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics">DataOciContainerInstancesContainerInstanceVnics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `IsPublicIpAssigned`<sup>Required</sup> <a name="IsPublicIpAssigned" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.isPublicIpAssigned"></a>

```go
func IsPublicIpAssigned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.skipSourceDestCheck"></a>

```go
func SkipSourceDestCheck() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VnicId`<sup>Required</sup> <a name="VnicId" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.vnicId"></a>

```go
func VnicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnicsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceVnics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVnics">DataOciContainerInstancesContainerInstanceVnics</a>

---


### DataOciContainerInstancesContainerInstanceVolumesConfigsList <a name="DataOciContainerInstancesContainerInstanceVolumesConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceVolumesConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceVolumesConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference <a name="DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs">DataOciContainerInstancesContainerInstanceVolumesConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceVolumesConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigs">DataOciContainerInstancesContainerInstanceVolumesConfigs</a>

---


### DataOciContainerInstancesContainerInstanceVolumesList <a name="DataOciContainerInstancesContainerInstanceVolumesList" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerInstancesContainerInstanceVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get"></a>

```go
func Get(index *f64) DataOciContainerInstancesContainerInstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerInstancesContainerInstanceVolumesOutputReference <a name="DataOciContainerInstancesContainerInstanceVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerinstancescontainerinstance"

dataocicontainerinstancescontainerinstance.NewDataOciContainerInstancesContainerInstanceVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerInstancesContainerInstanceVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore">BackingStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.configs">Configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList">DataOciContainerInstancesContainerInstanceVolumesConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes">DataOciContainerInstancesContainerInstanceVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackingStore`<sup>Required</sup> <a name="BackingStore" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.backingStore"></a>

```go
func BackingStore() *string
```

- *Type:* *string

---

##### `Configs`<sup>Required</sup> <a name="Configs" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.configs"></a>

```go
func Configs() DataOciContainerInstancesContainerInstanceVolumesConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesConfigsList">DataOciContainerInstancesContainerInstanceVolumesConfigsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerInstancesContainerInstanceVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerInstancesContainerInstance.DataOciContainerInstancesContainerInstanceVolumes">DataOciContainerInstancesContainerInstanceVolumes</a>

---



