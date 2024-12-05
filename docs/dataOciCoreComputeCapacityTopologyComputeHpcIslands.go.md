# `dataOciCoreComputeCapacityTopologyComputeHpcIslands` Submodule <a name="`dataOciCoreComputeCapacityTopologyComputeHpcIslands` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslands <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslands" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands oci_core_compute_capacity_topology_compute_hpc_islands}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.NewDataOciCoreComputeCapacityTopologyComputeHpcIslands(scope Construct, id *string, config DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig) DataOciCoreComputeCapacityTopologyComputeHpcIslands
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig">DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig">DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeHpcIslands resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslands_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslands_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslands_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslands_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityTopologyComputeHpcIslands resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreComputeCapacityTopologyComputeHpcIslands to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreComputeCapacityTopologyComputeHpcIslands that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityTopologyComputeHpcIslands to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeHpcIslandCollection">ComputeHpcIslandCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyIdInput">ComputeCapacityTopologyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ComputeHpcIslandCollection`<sup>Required</sup> <a name="ComputeHpcIslandCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeHpcIslandCollection"></a>

```go
func ComputeHpcIslandCollection() DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filter"></a>

```go
func Filter() DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeCapacityTopologyIdInput`<sup>Optional</sup> <a name="ComputeCapacityTopologyIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyIdInput"></a>

```go
func ComputeCapacityTopologyIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.computeCapacityTopologyId"></a>

```go
func ComputeCapacityTopologyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslands.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

&dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection {

}
```


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

&dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems {

}
```


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

&dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig {
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
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.computeCapacityTopologyId"></a>

```go
ComputeCapacityTopologyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compute_capacity_topology_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compute_capacity_topology_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#availability_domain DataOciCoreComputeCapacityTopologyComputeHpcIslands#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#compartment_id DataOciCoreComputeCapacityTopologyComputeHpcIslands#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#filter DataOciCoreComputeCapacityTopologyComputeHpcIslands#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#id DataOciCoreComputeCapacityTopologyComputeHpcIslands#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

&dataocicorecomputecapacitytopologycomputehpcislands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#name DataOciCoreComputeCapacityTopologyComputeHpcIslands#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#values DataOciCoreComputeCapacityTopologyComputeHpcIslands#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#regex DataOciCoreComputeCapacityTopologyComputeHpcIslands#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#name DataOciCoreComputeCapacityTopologyComputeHpcIslands#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#values DataOciCoreComputeCapacityTopologyComputeHpcIslands#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_topology_compute_hpc_islands#regex DataOciCoreComputeCapacityTopologyComputeHpcIslands#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.NewDataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.NewDataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.computeCapacityTopologyId">ComputeCapacityTopologyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.totalComputeBareMetalHostCount">TotalComputeBareMetalHostCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeCapacityTopologyId`<sup>Required</sup> <a name="ComputeCapacityTopologyId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.computeCapacityTopologyId"></a>

```go
func ComputeCapacityTopologyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalComputeBareMetalHostCount`<sup>Required</sup> <a name="TotalComputeBareMetalHostCount" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.totalComputeBareMetalHostCount"></a>

```go
func TotalComputeBareMetalHostCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItems</a>

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.NewDataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.NewDataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.items"></a>

```go
func Items() DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection">DataOciCoreComputeCapacityTopologyComputeHpcIslandsComputeHpcIslandCollection</a>

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.NewDataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference <a name="DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacitytopologycomputehpcislands"

dataocicorecomputecapacitytopologycomputehpcislands.NewDataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityTopologyComputeHpcIslands.DataOciCoreComputeCapacityTopologyComputeHpcIslandsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



