# `dataOciCoreComputeCapacityTopologyComputeNetworkBlocks` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeNetworkBlocks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocks <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocks" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks oci_core_compute_capacity_topology_compute_network_blocks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.NewDataOciCoreComputeCapacityTopologyComputeNetworkBlocks(scope Construct, id *string, config DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig) DataOciCoreComputeCapacityTopologyComputeNetworkBlocks
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetComputeHpcIslandId">ResetComputeHpcIslandId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetComputeHpcIslandId` <a name="ResetComputeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetComputeHpcIslandId"></a>

```go
func ResetComputeHpcIslandId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeNetworkBlocks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeNetworkBlocks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeNetworkBlocks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreComputeCapacityTopologyComputeNetworkBlocks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeNetworkBlocks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeNetworkBlockCollection">ComputeNetworkBlockCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyIdInput">ComputeCapacityTopologyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandIdInput">ComputeHpcIslandIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandId">ComputeHpcIslandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ComputeNetworkBlockCollection`<sup>Required</sup> <a name="ComputeNetworkBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeNetworkBlockCollection"></a>

```go
func ComputeNetworkBlockCollection() DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filter"></a>

```go
func Filter() DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeCapacityTopologyIdInput`<sup>Optional</sup> <a name="ComputeCapacityTopologyIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyIdInput"></a>

```go
func ComputeCapacityTopologyIdInput() *string
```

- *Type:* *string

---

##### `ComputeHpcIslandIdInput`<sup>Optional</sup> <a name="ComputeHpcIslandIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandIdInput"></a>

```go
func ComputeHpcIslandIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeCapacityTopologyId"></a>

```go
func ComputeCapacityTopologyId() *string
```

- *Type:* *string

---

##### `ComputeHpcIslandId`<sup>Required</sup> <a name="ComputeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.computeHpcIslandId"></a>

```go
func ComputeHpcIslandId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocks.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

&dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection {

}
```


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

&dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems {

}
```


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

&dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComputeCapacityTopologyId: *string,
	AvailabilityDomain: *string,
	CompartmentId: *string,
	ComputeHpcIslandId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#availability_domain DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compartment_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeHpcIslandId">ComputeHpcIslandId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeCapacityTopologyId"></a>

```go
ComputeCapacityTopologyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_capacity_topology_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#availability_domain DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compartment_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compartment_id}.

---

##### `ComputeHpcIslandId`<sup>Optional</sup> <a name="ComputeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.computeHpcIslandId"></a>

```go
ComputeHpcIslandId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#compute_hpc_island_id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#compute_hpc_island_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#filter DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#id DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

&dataocicorecomputecapacitytopologycomputenetworkblocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#name DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#values DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#regex DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#name DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#values DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_network_blocks#regex DataOciCoreComputeCapacityTopologyComputeNetworkBlocks#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.NewDataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.NewDataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeHpcIslandId">ComputeHpcIslandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.totalComputeBareMetalHostCount">TotalComputeBareMetalHostCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```go
func ComputeCapacityTopologyId() *string
```

- *Type:* *string

---

##### `ComputeHpcIslandId`<sup>Required</sup> <a name="ComputeHpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.computeHpcIslandId"></a>

```go
func ComputeHpcIslandId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalComputeBareMetalHostCount`<sup>Required</sup> <a name="TotalComputeBareMetalHostCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.totalComputeBareMetalHostCount"></a>

```go
func TotalComputeBareMetalHostCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.NewDataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.NewDataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection">DataOciCoreComputeCapacityTopologyComputeNetworkBlocksComputeNetworkBlockCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.NewDataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputenetworkblocks"

dataocicorecomputecapacitytopologycomputenetworkblocks.NewDataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeNetworkBlocks.DataOciCoreComputeCapacityTopologyComputeNetworkBlocksFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



