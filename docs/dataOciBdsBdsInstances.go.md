# `dataOciBdsBdsInstances` Submodule <a name="`dataOciBdsBdsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstances <a name="DataOciBdsBdsInstances" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances oci_bds_bds_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstances(scope Construct, id *string, config DataOciBdsBdsInstancesConfig) DataOciBdsBdsInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig">DataOciBdsBdsInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig">DataOciBdsBdsInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.DataOciBdsBdsInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.DataOciBdsBdsInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.DataOciBdsBdsInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.DataOciBdsBdsInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciBdsBdsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciBdsBdsInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciBdsBdsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.bdsInstances">BdsInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList">DataOciBdsBdsInstancesBdsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList">DataOciBdsBdsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BdsInstances`<sup>Required</sup> <a name="BdsInstances" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.bdsInstances"></a>

```go
func BdsInstances() DataOciBdsBdsInstancesBdsInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList">DataOciBdsBdsInstancesBdsInstancesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filter"></a>

```go
func Filter() DataOciBdsBdsInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList">DataOciBdsBdsInstancesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstancesBdsInstances <a name="DataOciBdsBdsInstancesBdsInstances" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstances {

}
```


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails {

}
```


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails {

}
```


### DataOciBdsBdsInstancesBdsInstancesClusterDetails <a name="DataOciBdsBdsInstancesBdsInstancesClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails {

}
```


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode {

}
```


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig {

}
```


### DataOciBdsBdsInstancesBdsInstancesEdgeNode <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode {

}
```


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig {

}
```


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode {

}
```


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig {

}
```


### DataOciBdsBdsInstancesBdsInstancesMasterNode <a name="DataOciBdsBdsInstancesBdsInstancesMasterNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesMasterNode {

}
```


### DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig {

}
```


### DataOciBdsBdsInstancesBdsInstancesNetworkConfig <a name="DataOciBdsBdsInstancesBdsInstancesNetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig {

}
```


### DataOciBdsBdsInstancesBdsInstancesNodes <a name="DataOciBdsBdsInstancesBdsInstancesNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesNodes {

}
```


### DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes <a name="DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes {

}
```


### DataOciBdsBdsInstancesBdsInstancesUtilNode <a name="DataOciBdsBdsInstancesBdsInstancesUtilNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesUtilNode {

}
```


### DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig {

}
```


### DataOciBdsBdsInstancesBdsInstancesWorkerNode <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode {

}
```


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig {

}
```


### DataOciBdsBdsInstancesConfig <a name="DataOciBdsBdsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesConfig {
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
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#compartment_id DataOciBdsBdsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#display_name DataOciBdsBdsInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#id DataOciBdsBdsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#state DataOciBdsBdsInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#compartment_id DataOciBdsBdsInstances#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#display_name DataOciBdsBdsInstances#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#filter DataOciBdsBdsInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#id DataOciBdsBdsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#state DataOciBdsBdsInstances#state}.

---

### DataOciBdsBdsInstancesFilter <a name="DataOciBdsBdsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

&dataocibdsbdsinstances.DataOciBdsBdsInstancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#name DataOciBdsBdsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#values DataOciBdsBdsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#regex DataOciBdsBdsInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#name DataOciBdsBdsInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#values DataOciBdsBdsInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instances#regex DataOciBdsBdsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile">KeytabFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.principalName">PrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeytabFile`<sup>Required</sup> <a name="KeytabFile" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.keytabFile"></a>

```go
func KeytabFile() *string
```

- *Type:* *string

---

##### `PrincipalName`<sup>Required</sup> <a name="PrincipalName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.principalName"></a>

```go
func PrincipalName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetails</a>

---


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers">IsKerberosMappedToDatabaseUsers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.kerberosDetails">KerberosDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.blockVolumeSizeInGbs"></a>

```go
func BlockVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsKerberosMappedToDatabaseUsers`<sup>Required</sup> <a name="IsKerberosMappedToDatabaseUsers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.isKerberosMappedToDatabaseUsers"></a>

```go
func IsKerberosMappedToDatabaseUsers() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KerberosDetails`<sup>Required</sup> <a name="KerberosDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.kerberosDetails"></a>

```go
func KerberosDetails() DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsKerberosDetailsList</a>

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetails</a>

---


### DataOciBdsBdsInstancesBdsInstancesClusterDetailsList <a name="DataOciBdsBdsInstancesBdsInstancesClusterDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesClusterDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesClusterDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.ambariUrl">AmbariUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdaVersion">BdaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdCellVersion">BdCellVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdmVersion">BdmVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdsVersion">BdsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bigDataManagerUrl">BigDataManagerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.clouderaManagerUrl">ClouderaManagerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.csqlCellVersion">CsqlCellVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.dbVersion">DbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.hueServerUrl">HueServerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.jupyterHubUrl">JupyterHubUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.odhVersion">OdhVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeRefreshed">TimeRefreshed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails">DataOciBdsBdsInstancesBdsInstancesClusterDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmbariUrl`<sup>Required</sup> <a name="AmbariUrl" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.ambariUrl"></a>

```go
func AmbariUrl() *string
```

- *Type:* *string

---

##### `BdaVersion`<sup>Required</sup> <a name="BdaVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdaVersion"></a>

```go
func BdaVersion() *string
```

- *Type:* *string

---

##### `BdCellVersion`<sup>Required</sup> <a name="BdCellVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdCellVersion"></a>

```go
func BdCellVersion() *string
```

- *Type:* *string

---

##### `BdmVersion`<sup>Required</sup> <a name="BdmVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdmVersion"></a>

```go
func BdmVersion() *string
```

- *Type:* *string

---

##### `BdsVersion`<sup>Required</sup> <a name="BdsVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bdsVersion"></a>

```go
func BdsVersion() *string
```

- *Type:* *string

---

##### `BigDataManagerUrl`<sup>Required</sup> <a name="BigDataManagerUrl" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.bigDataManagerUrl"></a>

```go
func BigDataManagerUrl() *string
```

- *Type:* *string

---

##### `ClouderaManagerUrl`<sup>Required</sup> <a name="ClouderaManagerUrl" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.clouderaManagerUrl"></a>

```go
func ClouderaManagerUrl() *string
```

- *Type:* *string

---

##### `CsqlCellVersion`<sup>Required</sup> <a name="CsqlCellVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.csqlCellVersion"></a>

```go
func CsqlCellVersion() *string
```

- *Type:* *string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.dbVersion"></a>

```go
func DbVersion() *string
```

- *Type:* *string

---

##### `HueServerUrl`<sup>Required</sup> <a name="HueServerUrl" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.hueServerUrl"></a>

```go
func HueServerUrl() *string
```

- *Type:* *string

---

##### `JupyterHubUrl`<sup>Required</sup> <a name="JupyterHubUrl" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.jupyterHubUrl"></a>

```go
func JupyterHubUrl() *string
```

- *Type:* *string

---

##### `OdhVersion`<sup>Required</sup> <a name="OdhVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.odhVersion"></a>

```go
func OdhVersion() *string
```

- *Type:* *string

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeRefreshed`<sup>Required</sup> <a name="TimeRefreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.timeRefreshed"></a>

```go
func TimeRefreshed() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesClusterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetails">DataOciBdsBdsInstancesBdsInstancesClusterDetails</a>

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```go
func BlockVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeList <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesEdgeNodeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesEdgeNodeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode">DataOciBdsBdsInstancesBdsInstancesEdgeNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```go
func BlockVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesEdgeNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNode">DataOciBdsBdsInstancesBdsInstancesEdgeNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesEdgeNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes">NumberOfKafkaNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```go
func BlockVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `NumberOfKafkaNodes`<sup>Required</sup> <a name="NumberOfKafkaNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.numberOfKafkaNodes"></a>

```go
func NumberOfKafkaNodes() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesList <a name="DataOciBdsBdsInstancesBdsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeList <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesMasterNodeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesMasterNodeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode">DataOciBdsBdsInstancesBdsInstancesMasterNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```go
func BlockVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesMasterNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNode">DataOciBdsBdsInstancesBdsInstancesMasterNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesMasterNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesNetworkConfigList <a name="DataOciBdsBdsInstancesBdsInstancesNetworkConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesNetworkConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesNetworkConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.isNatGatewayRequired">IsNatGatewayRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig">DataOciBdsBdsInstancesBdsInstancesNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `IsNatGatewayRequired`<sup>Required</sup> <a name="IsNatGatewayRequired" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.isNatGatewayRequired"></a>

```go
func IsNatGatewayRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesNetworkConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfig">DataOciBdsBdsInstancesBdsInstancesNetworkConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList <a name="DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId">VolumeAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs">VolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VolumeAttachmentId`<sup>Required</sup> <a name="VolumeAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeAttachmentId"></a>

```go
func VolumeAttachmentId() *string
```

- *Type:* *string

---

##### `VolumeSizeInGbs`<sup>Required</sup> <a name="VolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.volumeSizeInGbs"></a>

```go
func VolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumes</a>

---


### DataOciBdsBdsInstancesBdsInstancesNodesList <a name="DataOciBdsBdsInstancesBdsInstancesNodesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesNodesOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.attachedBlockVolumes">AttachedBlockVolumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.isRebootRequired">IsRebootRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.osVersion">OsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.sshFingerprint">SshFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeMaintenanceRebootDue">TimeMaintenanceRebootDue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes">DataOciBdsBdsInstancesBdsInstancesNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedBlockVolumes`<sup>Required</sup> <a name="AttachedBlockVolumes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.attachedBlockVolumes"></a>

```go
func AttachedBlockVolumes() DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList">DataOciBdsBdsInstancesBdsInstancesNodesAttachedBlockVolumesList</a>

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsRebootRequired`<sup>Required</sup> <a name="IsRebootRequired" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.isRebootRequired"></a>

```go
func IsRebootRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.localDisksTotalSizeInGbs"></a>

```go
func LocalDisksTotalSizeInGbs() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.osVersion"></a>

```go
func OsVersion() *string
```

- *Type:* *string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshFingerprint`<sup>Required</sup> <a name="SshFingerprint" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.sshFingerprint"></a>

```go
func SshFingerprint() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeMaintenanceRebootDue`<sup>Required</sup> <a name="TimeMaintenanceRebootDue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.timeMaintenanceRebootDue"></a>

```go
func TimeMaintenanceRebootDue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodes">DataOciBdsBdsInstancesBdsInstancesNodes</a>

---


### DataOciBdsBdsInstancesBdsInstancesOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.bootstrapScriptUrl">BootstrapScriptUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.cloudSqlDetails">CloudSqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterDetails">ClusterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList">DataOciBdsBdsInstancesBdsInstancesClusterDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterProfile">ClusterProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterPublicKey">ClusterPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterVersion">ClusterVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.computeOnlyWorkerNode">ComputeOnlyWorkerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.edgeNode">EdgeNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.ignoreExistingNodesShape">IgnoreExistingNodesShape</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isCloudSqlConfigured">IsCloudSqlConfigured</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isForceStopJobs">IsForceStopJobs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isHighAvailability">IsHighAvailability</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isKafkaConfigured">IsKafkaConfigured</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isSecure">IsSecure</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kafkaBrokerNode">KafkaBrokerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kerberosRealmName">KerberosRealmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.masterNode">MasterNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList">DataOciBdsBdsInstancesBdsInstancesMasterNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.networkConfig">NetworkConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList">DataOciBdsBdsInstancesBdsInstancesNetworkConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList">DataOciBdsBdsInstancesBdsInstancesNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodesRequiringMaintenanceReboot">NumberOfNodesRequiringMaintenanceReboot</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.osPatchVersion">OsPatchVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.utilNode">UtilNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList">DataOciBdsBdsInstancesBdsInstancesUtilNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.workerNode">WorkerNode</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances">DataOciBdsBdsInstancesBdsInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootstrapScriptUrl`<sup>Required</sup> <a name="BootstrapScriptUrl" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.bootstrapScriptUrl"></a>

```go
func BootstrapScriptUrl() *string
```

- *Type:* *string

---

##### `CloudSqlDetails`<sup>Required</sup> <a name="CloudSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.cloudSqlDetails"></a>

```go
func CloudSqlDetails() DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList">DataOciBdsBdsInstancesBdsInstancesCloudSqlDetailsList</a>

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `ClusterDetails`<sup>Required</sup> <a name="ClusterDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterDetails"></a>

```go
func ClusterDetails() DataOciBdsBdsInstancesBdsInstancesClusterDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesClusterDetailsList">DataOciBdsBdsInstancesBdsInstancesClusterDetailsList</a>

---

##### `ClusterProfile`<sup>Required</sup> <a name="ClusterProfile" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterProfile"></a>

```go
func ClusterProfile() *string
```

- *Type:* *string

---

##### `ClusterPublicKey`<sup>Required</sup> <a name="ClusterPublicKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterPublicKey"></a>

```go
func ClusterPublicKey() *string
```

- *Type:* *string

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.clusterVersion"></a>

```go
func ClusterVersion() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeOnlyWorkerNode`<sup>Required</sup> <a name="ComputeOnlyWorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.computeOnlyWorkerNode"></a>

```go
func ComputeOnlyWorkerNode() DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesComputeOnlyWorkerNodeList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EdgeNode`<sup>Required</sup> <a name="EdgeNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.edgeNode"></a>

```go
func EdgeNode() DataOciBdsBdsInstancesBdsInstancesEdgeNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesEdgeNodeList">DataOciBdsBdsInstancesBdsInstancesEdgeNodeList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreExistingNodesShape`<sup>Required</sup> <a name="IgnoreExistingNodesShape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.ignoreExistingNodesShape"></a>

```go
func IgnoreExistingNodesShape() *[]*string
```

- *Type:* *[]*string

---

##### `IsCloudSqlConfigured`<sup>Required</sup> <a name="IsCloudSqlConfigured" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isCloudSqlConfigured"></a>

```go
func IsCloudSqlConfigured() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsForceStopJobs`<sup>Required</sup> <a name="IsForceStopJobs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isForceStopJobs"></a>

```go
func IsForceStopJobs() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHighAvailability`<sup>Required</sup> <a name="IsHighAvailability" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isHighAvailability"></a>

```go
func IsHighAvailability() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsKafkaConfigured`<sup>Required</sup> <a name="IsKafkaConfigured" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isKafkaConfigured"></a>

```go
func IsKafkaConfigured() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSecure`<sup>Required</sup> <a name="IsSecure" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.isSecure"></a>

```go
func IsSecure() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KafkaBrokerNode`<sup>Required</sup> <a name="KafkaBrokerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kafkaBrokerNode"></a>

```go
func KafkaBrokerNode() DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList">DataOciBdsBdsInstancesBdsInstancesKafkaBrokerNodeList</a>

---

##### `KerberosRealmName`<sup>Required</sup> <a name="KerberosRealmName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kerberosRealmName"></a>

```go
func KerberosRealmName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MasterNode`<sup>Required</sup> <a name="MasterNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.masterNode"></a>

```go
func MasterNode() DataOciBdsBdsInstancesBdsInstancesMasterNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesMasterNodeList">DataOciBdsBdsInstancesBdsInstancesMasterNodeList</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.networkConfig"></a>

```go
func NetworkConfig() DataOciBdsBdsInstancesBdsInstancesNetworkConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNetworkConfigList">DataOciBdsBdsInstancesBdsInstancesNetworkConfigList</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.nodes"></a>

```go
func Nodes() DataOciBdsBdsInstancesBdsInstancesNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesNodesList">DataOciBdsBdsInstancesBdsInstancesNodesList</a>

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `NumberOfNodesRequiringMaintenanceReboot`<sup>Required</sup> <a name="NumberOfNodesRequiringMaintenanceReboot" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.numberOfNodesRequiringMaintenanceReboot"></a>

```go
func NumberOfNodesRequiringMaintenanceReboot() *f64
```

- *Type:* *f64

---

##### `OsPatchVersion`<sup>Required</sup> <a name="OsPatchVersion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.osPatchVersion"></a>

```go
func OsPatchVersion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UtilNode`<sup>Required</sup> <a name="UtilNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.utilNode"></a>

```go
func UtilNode() DataOciBdsBdsInstancesBdsInstancesUtilNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList">DataOciBdsBdsInstancesBdsInstancesUtilNodeList</a>

---

##### `WorkerNode`<sup>Required</sup> <a name="WorkerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.workerNode"></a>

```go
func WorkerNode() DataOciBdsBdsInstancesBdsInstancesWorkerNodeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstances">DataOciBdsBdsInstancesBdsInstances</a>

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeList <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesUtilNodeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesUtilNodeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode">DataOciBdsBdsInstancesBdsInstancesUtilNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```go
func BlockVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesUtilNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNode">DataOciBdsBdsInstancesBdsInstancesUtilNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesUtilNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeList <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesWorkerNodeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesWorkerNodeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.blockVolumeSizeInGbs">BlockVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.numberOfNodes">NumberOfNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode">DataOciBdsBdsInstancesBdsInstancesWorkerNode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeSizeInGbs`<sup>Required</sup> <a name="BlockVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.blockVolumeSizeInGbs"></a>

```go
func BlockVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `NumberOfNodes`<sup>Required</sup> <a name="NumberOfNodes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.numberOfNodes"></a>

```go
func NumberOfNodes() *f64
```

- *Type:* *f64

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.shapeConfig"></a>

```go
func ShapeConfig() DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesWorkerNode
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNode">DataOciBdsBdsInstancesBdsInstancesWorkerNode</a>

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference <a name="DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig">DataOciBdsBdsInstancesBdsInstancesWorkerNodeShapeConfig</a>

---


### DataOciBdsBdsInstancesFilterList <a name="DataOciBdsBdsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsBdsInstancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.get"></a>

```go
func Get(index *f64) DataOciBdsBdsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciBdsBdsInstancesFilterOutputReference <a name="DataOciBdsBdsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstances"

dataocibdsbdsinstances.NewDataOciBdsBdsInstancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsBdsInstancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstances.DataOciBdsBdsInstancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



