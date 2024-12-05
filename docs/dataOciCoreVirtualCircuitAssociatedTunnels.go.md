# `dataOciCoreVirtualCircuitAssociatedTunnels` Submodule <a name="`dataOciCoreVirtualCircuitAssociatedTunnels` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnels <a name="DataOciCoreVirtualCircuitAssociatedTunnels" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels oci_core_virtual_circuit_associated_tunnels}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.NewDataOciCoreVirtualCircuitAssociatedTunnels(scope Construct, id *string, config DataOciCoreVirtualCircuitAssociatedTunnelsConfig) DataOciCoreVirtualCircuitAssociatedTunnels
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig">DataOciCoreVirtualCircuitAssociatedTunnelsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig">DataOciCoreVirtualCircuitAssociatedTunnelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.DataOciCoreVirtualCircuitAssociatedTunnels_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.DataOciCoreVirtualCircuitAssociatedTunnels_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.DataOciCoreVirtualCircuitAssociatedTunnels_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.DataOciCoreVirtualCircuitAssociatedTunnels_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreVirtualCircuitAssociatedTunnels resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreVirtualCircuitAssociatedTunnels to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreVirtualCircuitAssociatedTunnels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVirtualCircuitAssociatedTunnels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails">VirtualCircuitAssociatedTunnelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput">VirtualCircuitIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filter"></a>

```go
func Filter() DataOciCoreVirtualCircuitAssociatedTunnelsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList">DataOciCoreVirtualCircuitAssociatedTunnelsFilterList</a>

---

##### `VirtualCircuitAssociatedTunnelDetails`<sup>Required</sup> <a name="VirtualCircuitAssociatedTunnelDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitAssociatedTunnelDetails"></a>

```go
func VirtualCircuitAssociatedTunnelDetails() DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `VirtualCircuitIdInput`<sup>Optional</sup> <a name="VirtualCircuitIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitIdInput"></a>

```go
func VirtualCircuitIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.virtualCircuitId"></a>

```go
func VirtualCircuitId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnels.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsConfig <a name="DataOciCoreVirtualCircuitAssociatedTunnelsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

&dataocicorevirtualcircuitassociatedtunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VirtualCircuitId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId">VirtualCircuitId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VirtualCircuitId`<sup>Required</sup> <a name="VirtualCircuitId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.virtualCircuitId"></a>

```go
VirtualCircuitId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#virtual_circuit_id DataOciCoreVirtualCircuitAssociatedTunnels#virtual_circuit_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#filter DataOciCoreVirtualCircuitAssociatedTunnels#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#id DataOciCoreVirtualCircuitAssociatedTunnels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsFilter <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

&dataocicorevirtualcircuitassociatedtunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#name DataOciCoreVirtualCircuitAssociatedTunnels#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#values DataOciCoreVirtualCircuitAssociatedTunnels#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_virtual_circuit_associated_tunnels#regex DataOciCoreVirtualCircuitAssociatedTunnels#regex}.

---

### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

&dataocicorevirtualcircuitassociatedtunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVirtualCircuitAssociatedTunnelsFilterList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.NewDataOciCoreVirtualCircuitAssociatedTunnelsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVirtualCircuitAssociatedTunnelsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.NewDataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.NewDataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get"></a>

```go
func Get(index *f64) DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference <a name="DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorevirtualcircuitassociatedtunnels"

dataocicorevirtualcircuitassociatedtunnels.NewDataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId">IpsecConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId">TunnelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType">TunnelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpsecConnectionId`<sup>Required</sup> <a name="IpsecConnectionId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.ipsecConnectionId"></a>

```go
func IpsecConnectionId() *string
```

- *Type:* *string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelId"></a>

```go
func TunnelId() *string
```

- *Type:* *string

---

##### `TunnelType`<sup>Required</sup> <a name="TunnelType" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.tunnelType"></a>

```go
func TunnelType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVirtualCircuitAssociatedTunnels.DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails">DataOciCoreVirtualCircuitAssociatedTunnelsVirtualCircuitAssociatedTunnelDetails</a>

---



