# `dataOciContainerengineVirtualNodePools` Submodule <a name="`dataOciContainerengineVirtualNodePools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineVirtualNodePools <a name="DataOciContainerengineVirtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools oci_containerengine_virtual_node_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePools(scope Construct, id *string, config DataOciContainerengineVirtualNodePoolsConfig) DataOciContainerengineVirtualNodePools
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig">DataOciContainerengineVirtualNodePoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig">DataOciContainerengineVirtualNodePoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClusterId` <a name="ResetClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineVirtualNodePools resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePools_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePools_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePools_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePools_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciContainerengineVirtualNodePools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciContainerengineVirtualNodePools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciContainerengineVirtualNodePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineVirtualNodePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList">DataOciContainerengineVirtualNodePoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.virtualNodePools">VirtualNodePools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filter"></a>

```go
func Filter() DataOciContainerengineVirtualNodePoolsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList">DataOciContainerengineVirtualNodePoolsFilterList</a>

---

##### `VirtualNodePools`<sup>Required</sup> <a name="VirtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.virtualNodePools"></a>

```go
func VirtualNodePools() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineVirtualNodePoolsConfig <a name="DataOciContainerengineVirtualNodePoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ClusterId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#filter DataOciContainerengineVirtualNodePools#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}.

---

### DataOciContainerengineVirtualNodePoolsFilter <a name="DataOciContainerengineVirtualNodePoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#name DataOciContainerengineVirtualNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#values DataOciContainerengineVirtualNodePools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#regex DataOciContainerengineVirtualNodePools#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#name DataOciContainerengineVirtualNodePools#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#values DataOciContainerengineVirtualNodePools#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#regex DataOciContainerengineVirtualNodePools#regex}.

---

### DataOciContainerengineVirtualNodePoolsVirtualNodePools <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsVirtualNodePools {

}
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels {

}
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations {

}
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration {

}
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints {

}
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

&dataocicontainerenginevirtualnodepools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineVirtualNodePoolsFilterList <a name="DataOciContainerengineVirtualNodePoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineVirtualNodePoolsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get"></a>

```go
func Get(index *f64) DataOciContainerengineVirtualNodePoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciContainerengineVirtualNodePoolsFilterOutputReference <a name="DataOciContainerengineVirtualNodePoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineVirtualNodePoolsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.initialVirtualNodeLabels">InitialVirtualNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.placementConfigurations">PlacementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.podConfiguration">PodConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.taints">Taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodePoolId">VirtualNodePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodeTags">VirtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools">DataOciContainerengineVirtualNodePoolsVirtualNodePools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialVirtualNodeLabels`<sup>Required</sup> <a name="InitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.initialVirtualNodeLabels"></a>

```go
func InitialVirtualNodeLabels() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList</a>

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PlacementConfigurations`<sup>Required</sup> <a name="PlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.placementConfigurations"></a>

```go
func PlacementConfigurations() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList</a>

---

##### `PodConfiguration`<sup>Required</sup> <a name="PodConfiguration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.podConfiguration"></a>

```go
func PodConfiguration() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.taints"></a>

```go
func Taints() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VirtualNodePoolId`<sup>Required</sup> <a name="VirtualNodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodePoolId"></a>

```go
func VirtualNodePoolId() *string
```

- *Type:* *string

---

##### `VirtualNodeTags`<sup>Required</sup> <a name="VirtualNodeTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodeTags"></a>

```go
func VirtualNodeTags() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineVirtualNodePoolsVirtualNodePools
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools">DataOciContainerengineVirtualNodePoolsVirtualNodePools</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get"></a>

```go
func Get(index *f64) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get"></a>

```go
func Get(index *f64) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerenginevirtualnodepools"

dataocicontainerenginevirtualnodepools.NewDataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags</a>

---



