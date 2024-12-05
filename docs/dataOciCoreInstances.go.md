# `dataOciCoreInstances` Submodule <a name="`dataOciCoreInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstances <a name="DataOciCoreInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances oci_core_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstances(scope Construct, id *string, config DataOciCoreInstancesConfig) DataOciCoreInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig">DataOciCoreInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig">DataOciCoreInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetComputeClusterId">ResetComputeClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetComputeClusterId` <a name="ResetComputeClusterId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetComputeClusterId"></a>

```go
func ResetComputeClusterId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.DataOciCoreInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.DataOciCoreInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.DataOciCoreInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.DataOciCoreInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList">DataOciCoreInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.instances">Instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList">DataOciCoreInstancesInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.filter"></a>

```go
func Filter() DataOciCoreInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList">DataOciCoreInstancesFilterList</a>

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.instances"></a>

```go
func Instances() DataOciCoreInstancesInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList">DataOciCoreInstancesInstancesList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.computeClusterIdInput"></a>

```go
func ComputeClusterIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.computeClusterId"></a>

```go
func ComputeClusterId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstancesConfig <a name="DataOciCoreInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AvailabilityDomain: *string,
	CapacityReservationId: *string,
	ComputeClusterId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#compartment_id DataOciCoreInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#availability_domain DataOciCoreInstances#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#capacity_reservation_id DataOciCoreInstances#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#compute_cluster_id DataOciCoreInstances#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#display_name DataOciCoreInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#id DataOciCoreInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#state DataOciCoreInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#compartment_id DataOciCoreInstances#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#availability_domain DataOciCoreInstances#availability_domain}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#capacity_reservation_id DataOciCoreInstances#capacity_reservation_id}.

---

##### `ComputeClusterId`<sup>Optional</sup> <a name="ComputeClusterId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.computeClusterId"></a>

```go
ComputeClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#compute_cluster_id DataOciCoreInstances#compute_cluster_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#display_name DataOciCoreInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#filter DataOciCoreInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#id DataOciCoreInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#state DataOciCoreInstances#state}.

---

### DataOciCoreInstancesFilter <a name="DataOciCoreInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#name DataOciCoreInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#values DataOciCoreInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#regex DataOciCoreInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#name DataOciCoreInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#values DataOciCoreInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instances#regex DataOciCoreInstances#regex}.

---

### DataOciCoreInstancesInstances <a name="DataOciCoreInstancesInstances" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstances {

}
```


### DataOciCoreInstancesInstancesAgentConfig <a name="DataOciCoreInstancesInstancesAgentConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesAgentConfig {

}
```


### DataOciCoreInstancesInstancesAgentConfigPluginsConfig <a name="DataOciCoreInstancesInstancesAgentConfigPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfig {

}
```


### DataOciCoreInstancesInstancesAvailabilityConfig <a name="DataOciCoreInstancesInstancesAvailabilityConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesAvailabilityConfig {

}
```


### DataOciCoreInstancesInstancesCreateVnicDetails <a name="DataOciCoreInstancesInstancesCreateVnicDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesCreateVnicDetails {

}
```


### DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {

}
```


### DataOciCoreInstancesInstancesInstanceOptions <a name="DataOciCoreInstancesInstancesInstanceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesInstanceOptions {

}
```


### DataOciCoreInstancesInstancesLaunchOptions <a name="DataOciCoreInstancesInstancesLaunchOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesLaunchOptions {

}
```


### DataOciCoreInstancesInstancesLaunchVolumeAttachments <a name="DataOciCoreInstancesInstancesLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesLaunchVolumeAttachments {

}
```


### DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails <a name="DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails {

}
```


### DataOciCoreInstancesInstancesPlatformConfig <a name="DataOciCoreInstancesInstancesPlatformConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesPlatformConfig {

}
```


### DataOciCoreInstancesInstancesPreemptibleInstanceConfig <a name="DataOciCoreInstancesInstancesPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfig {

}
```


### DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction <a name="DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction {

}
```


### DataOciCoreInstancesInstancesShapeConfig <a name="DataOciCoreInstancesInstancesShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesShapeConfig {

}
```


### DataOciCoreInstancesInstancesSourceDetails <a name="DataOciCoreInstancesInstancesSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesSourceDetails {

}
```


### DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails <a name="DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

&dataocicoreinstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstancesFilterList <a name="DataOciCoreInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreInstancesFilterOutputReference <a name="DataOciCoreInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreInstancesInstancesAgentConfigList <a name="DataOciCoreInstancesInstancesAgentConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesAgentConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesAgentConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesAgentConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesAgentConfigOutputReference <a name="DataOciCoreInstancesInstancesAgentConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesAgentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesAgentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.areAllPluginsDisabled">AreAllPluginsDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.isManagementDisabled">IsManagementDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.isMonitoringDisabled">IsMonitoringDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.pluginsConfig">PluginsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList">DataOciCoreInstancesInstancesAgentConfigPluginsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfig">DataOciCoreInstancesInstancesAgentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreAllPluginsDisabled`<sup>Required</sup> <a name="AreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.areAllPluginsDisabled"></a>

```go
func AreAllPluginsDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsManagementDisabled`<sup>Required</sup> <a name="IsManagementDisabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.isManagementDisabled"></a>

```go
func IsManagementDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMonitoringDisabled`<sup>Required</sup> <a name="IsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.isMonitoringDisabled"></a>

```go
func IsMonitoringDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PluginsConfig`<sup>Required</sup> <a name="PluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.pluginsConfig"></a>

```go
func PluginsConfig() DataOciCoreInstancesInstancesAgentConfigPluginsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList">DataOciCoreInstancesInstancesAgentConfigPluginsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesAgentConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfig">DataOciCoreInstancesInstancesAgentConfig</a>

---


### DataOciCoreInstancesInstancesAgentConfigPluginsConfigList <a name="DataOciCoreInstancesInstancesAgentConfigPluginsConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesAgentConfigPluginsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesAgentConfigPluginsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference <a name="DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfig">DataOciCoreInstancesInstancesAgentConfigPluginsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesAgentConfigPluginsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigPluginsConfig">DataOciCoreInstancesInstancesAgentConfigPluginsConfig</a>

---


### DataOciCoreInstancesInstancesAvailabilityConfigList <a name="DataOciCoreInstancesInstancesAvailabilityConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesAvailabilityConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesAvailabilityConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesAvailabilityConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesAvailabilityConfigOutputReference <a name="DataOciCoreInstancesInstancesAvailabilityConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesAvailabilityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesAvailabilityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.isLiveMigrationPreferred">IsLiveMigrationPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.recoveryAction">RecoveryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfig">DataOciCoreInstancesInstancesAvailabilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsLiveMigrationPreferred`<sup>Required</sup> <a name="IsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.isLiveMigrationPreferred"></a>

```go
func IsLiveMigrationPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RecoveryAction`<sup>Required</sup> <a name="RecoveryAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.recoveryAction"></a>

```go
func RecoveryAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesAvailabilityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfig">DataOciCoreInstancesInstancesAvailabilityConfig</a>

---


### DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Ipv6SubnetCidr`<sup>Required</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```go
func Ipv6SubnetCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreInstancesInstancesCreateVnicDetailsList <a name="DataOciCoreInstancesInstancesCreateVnicDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesCreateVnicDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesCreateVnicDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference <a name="DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesCreateVnicDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetails">DataOciCoreInstancesInstancesCreateVnicDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssignIpv6Ip`<sup>Required</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```go
func AssignIpv6Ip() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AssignPrivateDnsRecord`<sup>Required</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```go
func AssignPrivateDnsRecord() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```go
func Ipv6AddressIpv6SubnetCidrPairDetails() DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreInstancesInstancesCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```go
func SecurityAttributes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```go
func SkipSourceDestCheck() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetails">DataOciCoreInstancesInstancesCreateVnicDetails</a>

---


### DataOciCoreInstancesInstancesInstanceOptionsList <a name="DataOciCoreInstancesInstancesInstanceOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesInstanceOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesInstanceOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesInstanceOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesInstanceOptionsOutputReference <a name="DataOciCoreInstancesInstancesInstanceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesInstanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesInstanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled">AreLegacyImdsEndpointsDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptions">DataOciCoreInstancesInstancesInstanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreLegacyImdsEndpointsDisabled`<sup>Required</sup> <a name="AreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled"></a>

```go
func AreLegacyImdsEndpointsDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesInstanceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptions">DataOciCoreInstancesInstancesInstanceOptions</a>

---


### DataOciCoreInstancesInstancesLaunchOptionsList <a name="DataOciCoreInstancesInstancesLaunchOptionsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesLaunchOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesLaunchOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesLaunchOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesLaunchOptionsOutputReference <a name="DataOciCoreInstancesInstancesLaunchOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesLaunchOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesLaunchOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.bootVolumeType">BootVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.firmware">Firmware</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled">IsConsistentVolumeNamingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.remoteDataVolumeType">RemoteDataVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptions">DataOciCoreInstancesInstancesLaunchOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootVolumeType`<sup>Required</sup> <a name="BootVolumeType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.bootVolumeType"></a>

```go
func BootVolumeType() *string
```

- *Type:* *string

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.firmware"></a>

```go
func Firmware() *string
```

- *Type:* *string

---

##### `IsConsistentVolumeNamingEnabled`<sup>Required</sup> <a name="IsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled"></a>

```go
func IsConsistentVolumeNamingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `RemoteDataVolumeType`<sup>Required</sup> <a name="RemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.remoteDataVolumeType"></a>

```go
func RemoteDataVolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesLaunchOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptions">DataOciCoreInstancesInstancesLaunchOptions</a>

---


### DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList <a name="DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference <a name="DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType">VolumeCreationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb">VpusPerGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails">DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs"></a>

```go
func SizeInGbs() *string
```

- *Type:* *string

---

##### `VolumeCreationType`<sup>Required</sup> <a name="VolumeCreationType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType"></a>

```go
func VolumeCreationType() *string
```

- *Type:* *string

---

##### `VpusPerGb`<sup>Required</sup> <a name="VpusPerGb" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb"></a>

```go
func VpusPerGb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails">DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---


### DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList <a name="DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesLaunchVolumeAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference <a name="DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.device">Device</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType">EncryptionInTransitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">IsAgentAutoIscsiLoginEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isShareable">IsShareable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails">LaunchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList">DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.useChap">UseChap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachments">DataOciCoreInstancesInstancesLaunchVolumeAttachments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Device`<sup>Required</sup> <a name="Device" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.device"></a>

```go
func Device() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EncryptionInTransitType`<sup>Required</sup> <a name="EncryptionInTransitType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```go
func EncryptionInTransitType() *string
```

- *Type:* *string

---

##### `IsAgentAutoIscsiLoginEnabled`<sup>Required</sup> <a name="IsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```go
func IsAgentAutoIscsiLoginEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```go
func IsReadOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsShareable`<sup>Required</sup> <a name="IsShareable" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.isShareable"></a>

```go
func IsShareable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LaunchCreateVolumeDetails`<sup>Required</sup> <a name="LaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails"></a>

```go
func LaunchCreateVolumeDetails() DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList">DataOciCoreInstancesInstancesLaunchVolumeAttachmentsLaunchCreateVolumeDetailsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UseChap`<sup>Required</sup> <a name="UseChap" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.useChap"></a>

```go
func UseChap() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesLaunchVolumeAttachments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachments">DataOciCoreInstancesInstancesLaunchVolumeAttachments</a>

---


### DataOciCoreInstancesInstancesList <a name="DataOciCoreInstancesInstancesList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesOutputReference <a name="DataOciCoreInstancesInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.agentConfig">AgentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList">DataOciCoreInstancesInstancesAgentConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.async">Async</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.availabilityConfig">AvailabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList">DataOciCoreInstancesInstancesAvailabilityConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.bootVolumeId">BootVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList">DataOciCoreInstancesInstancesCreateVnicDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.dedicatedVmHostId">DedicatedVmHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.extendedMetadata">ExtendedMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.instanceConfigurationId">InstanceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.instanceOptions">InstanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList">DataOciCoreInstancesInstancesInstanceOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.ipxeScript">IpxeScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.isCrossNumaNode">IsCrossNumaNode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.launchMode">LaunchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.launchOptions">LaunchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList">DataOciCoreInstancesInstancesLaunchOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.launchVolumeAttachments">LaunchVolumeAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList">DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.platformConfig">PlatformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList">DataOciCoreInstancesInstancesPlatformConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.preemptibleInstanceConfig">PreemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList">DataOciCoreInstancesInstancesPreemptibleInstanceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.preserveDataVolumesCreatedAtLaunch">PreserveDataVolumesCreatedAtLaunch</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.securityAttributesState">SecurityAttributesState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList">DataOciCoreInstancesInstancesShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList">DataOciCoreInstancesInstancesSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.timeMaintenanceRebootDue">TimeMaintenanceRebootDue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.updateOperationConstraint">UpdateOperationConstraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstances">DataOciCoreInstancesInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConfig`<sup>Required</sup> <a name="AgentConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.agentConfig"></a>

```go
func AgentConfig() DataOciCoreInstancesInstancesAgentConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAgentConfigList">DataOciCoreInstancesInstancesAgentConfigList</a>

---

##### `Async`<sup>Required</sup> <a name="Async" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.async"></a>

```go
func Async() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvailabilityConfig`<sup>Required</sup> <a name="AvailabilityConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.availabilityConfig"></a>

```go
func AvailabilityConfig() DataOciCoreInstancesInstancesAvailabilityConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesAvailabilityConfigList">DataOciCoreInstancesInstancesAvailabilityConfigList</a>

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BootVolumeId`<sup>Required</sup> <a name="BootVolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.bootVolumeId"></a>

```go
func BootVolumeId() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.computeClusterId"></a>

```go
func ComputeClusterId() *string
```

- *Type:* *string

---

##### `CreateVnicDetails`<sup>Required</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.createVnicDetails"></a>

```go
func CreateVnicDetails() DataOciCoreInstancesInstancesCreateVnicDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesCreateVnicDetailsList">DataOciCoreInstancesInstancesCreateVnicDetailsList</a>

---

##### `DedicatedVmHostId`<sup>Required</sup> <a name="DedicatedVmHostId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.dedicatedVmHostId"></a>

```go
func DedicatedVmHostId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExtendedMetadata`<sup>Required</sup> <a name="ExtendedMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.extendedMetadata"></a>

```go
func ExtendedMetadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InstanceConfigurationId`<sup>Required</sup> <a name="InstanceConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.instanceConfigurationId"></a>

```go
func InstanceConfigurationId() *string
```

- *Type:* *string

---

##### `InstanceOptions`<sup>Required</sup> <a name="InstanceOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.instanceOptions"></a>

```go
func InstanceOptions() DataOciCoreInstancesInstancesInstanceOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesInstanceOptionsList">DataOciCoreInstancesInstancesInstanceOptionsList</a>

---

##### `IpxeScript`<sup>Required</sup> <a name="IpxeScript" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.ipxeScript"></a>

```go
func IpxeScript() *string
```

- *Type:* *string

---

##### `IsCrossNumaNode`<sup>Required</sup> <a name="IsCrossNumaNode" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.isCrossNumaNode"></a>

```go
func IsCrossNumaNode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LaunchMode`<sup>Required</sup> <a name="LaunchMode" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.launchMode"></a>

```go
func LaunchMode() *string
```

- *Type:* *string

---

##### `LaunchOptions`<sup>Required</sup> <a name="LaunchOptions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.launchOptions"></a>

```go
func LaunchOptions() DataOciCoreInstancesInstancesLaunchOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchOptionsList">DataOciCoreInstancesInstancesLaunchOptionsList</a>

---

##### `LaunchVolumeAttachments`<sup>Required</sup> <a name="LaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.launchVolumeAttachments"></a>

```go
func LaunchVolumeAttachments() DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList">DataOciCoreInstancesInstancesLaunchVolumeAttachmentsList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PlatformConfig`<sup>Required</sup> <a name="PlatformConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.platformConfig"></a>

```go
func PlatformConfig() DataOciCoreInstancesInstancesPlatformConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList">DataOciCoreInstancesInstancesPlatformConfigList</a>

---

##### `PreemptibleInstanceConfig`<sup>Required</sup> <a name="PreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.preemptibleInstanceConfig"></a>

```go
func PreemptibleInstanceConfig() DataOciCoreInstancesInstancesPreemptibleInstanceConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList">DataOciCoreInstancesInstancesPreemptibleInstanceConfigList</a>

---

##### `PreserveBootVolume`<sup>Required</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.preserveBootVolume"></a>

```go
func PreserveBootVolume() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PreserveDataVolumesCreatedAtLaunch`<sup>Required</sup> <a name="PreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.preserveDataVolumesCreatedAtLaunch"></a>

```go
func PreserveDataVolumesCreatedAtLaunch() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.securityAttributes"></a>

```go
func SecurityAttributes() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `SecurityAttributesState`<sup>Required</sup> <a name="SecurityAttributesState" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.securityAttributesState"></a>

```go
func SecurityAttributesState() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciCoreInstancesInstancesShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList">DataOciCoreInstancesInstancesShapeConfigList</a>

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.sourceDetails"></a>

```go
func SourceDetails() DataOciCoreInstancesInstancesSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList">DataOciCoreInstancesInstancesSourceDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeMaintenanceRebootDue`<sup>Required</sup> <a name="TimeMaintenanceRebootDue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.timeMaintenanceRebootDue"></a>

```go
func TimeMaintenanceRebootDue() *string
```

- *Type:* *string

---

##### `UpdateOperationConstraint`<sup>Required</sup> <a name="UpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.updateOperationConstraint"></a>

```go
func UpdateOperationConstraint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstances">DataOciCoreInstancesInstances</a>

---


### DataOciCoreInstancesInstancesPlatformConfigList <a name="DataOciCoreInstancesInstancesPlatformConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesPlatformConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesPlatformConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesPlatformConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesPlatformConfigOutputReference <a name="DataOciCoreInstancesInstancesPlatformConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesPlatformConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesPlatformConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.areVirtualInstructionsEnabled">AreVirtualInstructionsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.configMap">ConfigMap</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isAccessControlServiceEnabled">IsAccessControlServiceEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled">IsInputOutputMemoryManagementUnitEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isMeasuredBootEnabled">IsMeasuredBootEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isMemoryEncryptionEnabled">IsMemoryEncryptionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isSecureBootEnabled">IsSecureBootEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled">IsSymmetricMultiThreadingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled">IsTrustedPlatformModuleEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.numaNodesPerSocket">NumaNodesPerSocket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.percentageOfCoresEnabled">PercentageOfCoresEnabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfig">DataOciCoreInstancesInstancesPlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreVirtualInstructionsEnabled`<sup>Required</sup> <a name="AreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.areVirtualInstructionsEnabled"></a>

```go
func AreVirtualInstructionsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConfigMap`<sup>Required</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.configMap"></a>

```go
func ConfigMap() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsAccessControlServiceEnabled`<sup>Required</sup> <a name="IsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isAccessControlServiceEnabled"></a>

```go
func IsAccessControlServiceEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsInputOutputMemoryManagementUnitEnabled`<sup>Required</sup> <a name="IsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled"></a>

```go
func IsInputOutputMemoryManagementUnitEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMeasuredBootEnabled`<sup>Required</sup> <a name="IsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isMeasuredBootEnabled"></a>

```go
func IsMeasuredBootEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsMemoryEncryptionEnabled`<sup>Required</sup> <a name="IsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isMemoryEncryptionEnabled"></a>

```go
func IsMemoryEncryptionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSecureBootEnabled`<sup>Required</sup> <a name="IsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isSecureBootEnabled"></a>

```go
func IsSecureBootEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSymmetricMultiThreadingEnabled`<sup>Required</sup> <a name="IsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled"></a>

```go
func IsSymmetricMultiThreadingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTrustedPlatformModuleEnabled`<sup>Required</sup> <a name="IsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled"></a>

```go
func IsTrustedPlatformModuleEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NumaNodesPerSocket`<sup>Required</sup> <a name="NumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.numaNodesPerSocket"></a>

```go
func NumaNodesPerSocket() *string
```

- *Type:* *string

---

##### `PercentageOfCoresEnabled`<sup>Required</sup> <a name="PercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.percentageOfCoresEnabled"></a>

```go
func PercentageOfCoresEnabled() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesPlatformConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPlatformConfig">DataOciCoreInstancesInstancesPlatformConfig</a>

---


### DataOciCoreInstancesInstancesPreemptibleInstanceConfigList <a name="DataOciCoreInstancesInstancesPreemptibleInstanceConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesPreemptibleInstanceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesPreemptibleInstanceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference <a name="DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList">DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfig">DataOciCoreInstancesInstancesPreemptibleInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.preemptionAction"></a>

```go
func PreemptionAction() DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList">DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesPreemptibleInstanceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfig">DataOciCoreInstancesInstancesPreemptibleInstanceConfig</a>

---


### DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList <a name="DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference <a name="DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction">DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreserveBootVolume`<sup>Required</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume"></a>

```go
func PreserveBootVolume() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction">DataOciCoreInstancesInstancesPreemptibleInstanceConfigPreemptionAction</a>

---


### DataOciCoreInstancesInstancesShapeConfigList <a name="DataOciCoreInstancesInstancesShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesShapeConfigOutputReference <a name="DataOciCoreInstancesInstancesShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.gpuDescription">GpuDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.gpus">Gpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.localDiskDescription">LocalDiskDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.localDisks">LocalDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.maxVnicAttachments">MaxVnicAttachments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.vcpus">Vcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfig">DataOciCoreInstancesInstancesShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaselineOcpuUtilization`<sup>Required</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```go
func BaselineOcpuUtilization() *string
```

- *Type:* *string

---

##### `GpuDescription`<sup>Required</sup> <a name="GpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.gpuDescription"></a>

```go
func GpuDescription() *string
```

- *Type:* *string

---

##### `Gpus`<sup>Required</sup> <a name="Gpus" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.gpus"></a>

```go
func Gpus() *f64
```

- *Type:* *f64

---

##### `LocalDiskDescription`<sup>Required</sup> <a name="LocalDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.localDiskDescription"></a>

```go
func LocalDiskDescription() *string
```

- *Type:* *string

---

##### `LocalDisks`<sup>Required</sup> <a name="LocalDisks" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.localDisks"></a>

```go
func LocalDisks() *f64
```

- *Type:* *f64

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.localDisksTotalSizeInGbs"></a>

```go
func LocalDisksTotalSizeInGbs() *f64
```

- *Type:* *f64

---

##### `MaxVnicAttachments`<sup>Required</sup> <a name="MaxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.maxVnicAttachments"></a>

```go
func MaxVnicAttachments() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```go
func NetworkingBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.processorDescription"></a>

```go
func ProcessorDescription() *string
```

- *Type:* *string

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.vcpus"></a>

```go
func Vcpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesShapeConfig">DataOciCoreInstancesInstancesShapeConfig</a>

---


### DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList <a name="DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference <a name="DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter">DefinedTagsFilter</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails">DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTagsFilter`<sup>Required</sup> <a name="DefinedTagsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter"></a>

```go
func DefinedTagsFilter() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `OperatingSystemVersion`<sup>Required</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion"></a>

```go
func OperatingSystemVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails">DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetails</a>

---


### DataOciCoreInstancesInstancesSourceDetailsList <a name="DataOciCoreInstancesInstancesSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesSourceDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstancesInstancesSourceDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstancesInstancesSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstancesInstancesSourceDetailsOutputReference <a name="DataOciCoreInstancesInstancesSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstances"

dataocicoreinstances.NewDataOciCoreInstancesInstancesSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstancesInstancesSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.bootVolumeVpusPerGb">BootVolumeVpusPerGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.instanceSourceImageFilterDetails">InstanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList">DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled">IsPreserveBootVolumeEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetails">DataOciCoreInstancesInstancesSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootVolumeSizeInGbs`<sup>Required</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```go
func BootVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `BootVolumeVpusPerGb`<sup>Required</sup> <a name="BootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.bootVolumeVpusPerGb"></a>

```go
func BootVolumeVpusPerGb() *string
```

- *Type:* *string

---

##### `InstanceSourceImageFilterDetails`<sup>Required</sup> <a name="InstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.instanceSourceImageFilterDetails"></a>

```go
func InstanceSourceImageFilterDetails() DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList">DataOciCoreInstancesInstancesSourceDetailsInstanceSourceImageFilterDetailsList</a>

---

##### `IsPreserveBootVolumeEnabled`<sup>Required</sup> <a name="IsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled"></a>

```go
func IsPreserveBootVolumeEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstancesInstancesSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstances.DataOciCoreInstancesInstancesSourceDetails">DataOciCoreInstancesInstancesSourceDetails</a>

---



