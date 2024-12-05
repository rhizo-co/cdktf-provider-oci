# `dataOciCoreVirtualCircuits` Submodule <a name="`dataOciCoreVirtualCircuits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuits <a name="DataOciCoreVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits oci_core_virtual_circuits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuits(scope Construct, id *string, config DataOciCoreVirtualCircuitsConfig) DataOciCoreVirtualCircuits
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig">DataOciCoreVirtualCircuitsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig">DataOciCoreVirtualCircuitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuits resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.DataOciCoreVirtualCircuits_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.DataOciCoreVirtualCircuits_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.DataOciCoreVirtualCircuits_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.DataOciCoreVirtualCircuits_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreVirtualCircuits to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreVirtualCircuits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList">DataOciCoreVirtualCircuitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.virtualCircuits">VirtualCircuits</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList">DataOciCoreVirtualCircuitsVirtualCircuitsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filter"></a>

```go
func Filter() DataOciCoreVirtualCircuitsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList">DataOciCoreVirtualCircuitsFilterList</a>

---

##### `VirtualCircuits`<sup>Required</sup> <a name="VirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.virtualCircuits"></a>

```go
func VirtualCircuits() DataOciCoreVirtualCircuitsVirtualCircuitsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList">DataOciCoreVirtualCircuitsVirtualCircuitsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuits.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitsConfig <a name="DataOciCoreVirtualCircuitsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

&dataocicorevirtualcircuits.DataOciCoreVirtualCircuitsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#compartment_id DataOciCoreVirtualCircuits#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#display_name DataOciCoreVirtualCircuits#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#filter DataOciCoreVirtualCircuits#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#id DataOciCoreVirtualCircuits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#state DataOciCoreVirtualCircuits#state}.

---

### DataOciCoreVirtualCircuitsFilter <a name="DataOciCoreVirtualCircuitsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

&dataocicorevirtualcircuits.DataOciCoreVirtualCircuitsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#name DataOciCoreVirtualCircuits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#values DataOciCoreVirtualCircuits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#regex DataOciCoreVirtualCircuits#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#name DataOciCoreVirtualCircuits#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#values DataOciCoreVirtualCircuits#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuits#regex DataOciCoreVirtualCircuits#regex}.

---

### DataOciCoreVirtualCircuitsVirtualCircuits <a name="DataOciCoreVirtualCircuitsVirtualCircuits" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

&dataocicorevirtualcircuits.DataOciCoreVirtualCircuitsVirtualCircuits {

}
```


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

&dataocicorevirtualcircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings {

}
```


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

&dataocicorevirtualcircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes {

}
```


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

&dataocicorevirtualcircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitsFilterList <a name="DataOciCoreVirtualCircuitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVirtualCircuitsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreVirtualCircuitsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVirtualCircuitsFilterOutputReference <a name="DataOciCoreVirtualCircuitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVirtualCircuitsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get"></a>

```go
func Get(index *f64) DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">BgpMd5AuthKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">CrossConnectOrCrossConnectGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">CustomerBgpPeeringIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">CustomerBgpPeeringIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">OracleBgpPeeringIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">OracleBgpPeeringIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.vlan">Vlan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BgpMd5AuthKey`<sup>Required</sup> <a name="BgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```go
func BgpMd5AuthKey() *string
```

- *Type:* *string

---

##### `CrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="CrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```go
func CrossConnectOrCrossConnectGroupId() *string
```

- *Type:* *string

---

##### `CustomerBgpPeeringIp`<sup>Required</sup> <a name="CustomerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```go
func CustomerBgpPeeringIp() *string
```

- *Type:* *string

---

##### `CustomerBgpPeeringIpv6`<sup>Required</sup> <a name="CustomerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```go
func CustomerBgpPeeringIpv6() *string
```

- *Type:* *string

---

##### `OracleBgpPeeringIp`<sup>Required</sup> <a name="OracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```go
func OracleBgpPeeringIp() *string
```

- *Type:* *string

---

##### `OracleBgpPeeringIpv6`<sup>Required</sup> <a name="OracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```go
func OracleBgpPeeringIpv6() *string
```

- *Type:* *string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.vlan"></a>

```go
func Vlan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappings</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get"></a>

```go
func Get(index *f64) DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bandwidthShapeName">BandwidthShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpAdminState">BgpAdminState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpIpv6SessionState">BgpIpv6SessionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpManagement">BgpManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpSessionState">BgpSessionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.crossConnectMappings">CrossConnectMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerAsn">CustomerAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerBgpAsn">CustomerBgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.ipMtu">IpMtu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isBfdEnabled">IsBfdEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isTransportMode">IsTransportMode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.oracleBgpAsn">OracleBgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceId">ProviderServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceKeyName">ProviderServiceKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerState">ProviderState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.publicPrefixes">PublicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.referenceComment">ReferenceComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.routingPolicy">RoutingPolicy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitRedundancyMetadata">VirtualCircuitRedundancyMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits">DataOciCoreVirtualCircuitsVirtualCircuits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BandwidthShapeName`<sup>Required</sup> <a name="BandwidthShapeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bandwidthShapeName"></a>

```go
func BandwidthShapeName() *string
```

- *Type:* *string

---

##### `BgpAdminState`<sup>Required</sup> <a name="BgpAdminState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpAdminState"></a>

```go
func BgpAdminState() *string
```

- *Type:* *string

---

##### `BgpIpv6SessionState`<sup>Required</sup> <a name="BgpIpv6SessionState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpIpv6SessionState"></a>

```go
func BgpIpv6SessionState() *string
```

- *Type:* *string

---

##### `BgpManagement`<sup>Required</sup> <a name="BgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpManagement"></a>

```go
func BgpManagement() *string
```

- *Type:* *string

---

##### `BgpSessionState`<sup>Required</sup> <a name="BgpSessionState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.bgpSessionState"></a>

```go
func BgpSessionState() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CrossConnectMappings`<sup>Required</sup> <a name="CrossConnectMappings" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.crossConnectMappings"></a>

```go
func CrossConnectMappings() DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList">DataOciCoreVirtualCircuitsVirtualCircuitsCrossConnectMappingsList</a>

---

##### `CustomerAsn`<sup>Required</sup> <a name="CustomerAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerAsn"></a>

```go
func CustomerAsn() *string
```

- *Type:* *string

---

##### `CustomerBgpAsn`<sup>Required</sup> <a name="CustomerBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.customerBgpAsn"></a>

```go
func CustomerBgpAsn() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpMtu`<sup>Required</sup> <a name="IpMtu" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.ipMtu"></a>

```go
func IpMtu() *string
```

- *Type:* *string

---

##### `IsBfdEnabled`<sup>Required</sup> <a name="IsBfdEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isBfdEnabled"></a>

```go
func IsBfdEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsTransportMode`<sup>Required</sup> <a name="IsTransportMode" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.isTransportMode"></a>

```go
func IsTransportMode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OracleBgpAsn`<sup>Required</sup> <a name="OracleBgpAsn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.oracleBgpAsn"></a>

```go
func OracleBgpAsn() *f64
```

- *Type:* *f64

---

##### `ProviderServiceId`<sup>Required</sup> <a name="ProviderServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceId"></a>

```go
func ProviderServiceId() *string
```

- *Type:* *string

---

##### `ProviderServiceKeyName`<sup>Required</sup> <a name="ProviderServiceKeyName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerServiceKeyName"></a>

```go
func ProviderServiceKeyName() *string
```

- *Type:* *string

---

##### `ProviderState`<sup>Required</sup> <a name="ProviderState" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.providerState"></a>

```go
func ProviderState() *string
```

- *Type:* *string

---

##### `PublicPrefixes`<sup>Required</sup> <a name="PublicPrefixes" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.publicPrefixes"></a>

```go
func PublicPrefixes() DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList</a>

---

##### `ReferenceComment`<sup>Required</sup> <a name="ReferenceComment" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.referenceComment"></a>

```go
func ReferenceComment() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoutingPolicy`<sup>Required</sup> <a name="RoutingPolicy" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.routingPolicy"></a>

```go
func RoutingPolicy() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitId"></a>

```go
func VirtualCircuitId() *string
```

- *Type:* *string

---

##### `VirtualCircuitRedundancyMetadata`<sup>Required</sup> <a name="VirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.virtualCircuitRedundancyMetadata"></a>

```go
func VirtualCircuitRedundancyMetadata() DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVirtualCircuitsVirtualCircuits
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuits">DataOciCoreVirtualCircuitsVirtualCircuits</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get"></a>

```go
func Get(index *f64) DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.cidrBlock"></a>

```go
func CidrBlock() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes">DataOciCoreVirtualCircuitsVirtualCircuitsPublicPrefixes</a>

---


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get"></a>

```go
func Get(index *f64) DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference <a name="DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuits"

dataocicorevirtualcircuits.NewDataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">ConfiguredRedundancyLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">Ipv4BgpSessionRedundancyStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">Ipv6BgpSessionRedundancyStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfiguredRedundancyLevel`<sup>Required</sup> <a name="ConfiguredRedundancyLevel" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```go
func ConfiguredRedundancyLevel() *string
```

- *Type:* *string

---

##### `Ipv4BgpSessionRedundancyStatus`<sup>Required</sup> <a name="Ipv4BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```go
func Ipv4BgpSessionRedundancyStatus() *string
```

- *Type:* *string

---

##### `Ipv6BgpSessionRedundancyStatus`<sup>Required</sup> <a name="Ipv6BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```go
func Ipv6BgpSessionRedundancyStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuits.DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata">DataOciCoreVirtualCircuitsVirtualCircuitsVirtualCircuitRedundancyMetadata</a>

---



