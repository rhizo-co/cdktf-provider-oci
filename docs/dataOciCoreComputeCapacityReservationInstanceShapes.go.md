# `dataOciCoreComputeCapacityReservationInstanceShapes` Submodule <a name="`dataOciCoreComputeCapacityReservationInstanceShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeCapacityReservationInstanceShapes <a name="DataOciCoreComputeCapacityReservationInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes oci_core_compute_capacity_reservation_instance_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.NewDataOciCoreComputeCapacityReservationInstanceShapes(scope Construct, id *string, config DataOciCoreComputeCapacityReservationInstanceShapesConfig) DataOciCoreComputeCapacityReservationInstanceShapes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig">DataOciCoreComputeCapacityReservationInstanceShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig">DataOciCoreComputeCapacityReservationInstanceShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeCapacityReservationInstanceShapes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.DataOciCoreComputeCapacityReservationInstanceShapes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.DataOciCoreComputeCapacityReservationInstanceShapes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.DataOciCoreComputeCapacityReservationInstanceShapes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.DataOciCoreComputeCapacityReservationInstanceShapes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreComputeCapacityReservationInstanceShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreComputeCapacityReservationInstanceShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreComputeCapacityReservationInstanceShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeCapacityReservationInstanceShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.computeCapacityReservationInstanceShapes">ComputeCapacityReservationInstanceShapes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList">DataOciCoreComputeCapacityReservationInstanceShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ComputeCapacityReservationInstanceShapes`<sup>Required</sup> <a name="ComputeCapacityReservationInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.computeCapacityReservationInstanceShapes"></a>

```go
func ComputeCapacityReservationInstanceShapes() DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filter"></a>

```go
func Filter() DataOciCoreComputeCapacityReservationInstanceShapesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList">DataOciCoreComputeCapacityReservationInstanceShapesFilterList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes <a name="DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

&dataocicorecomputecapacityreservationinstanceshapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes {

}
```


### DataOciCoreComputeCapacityReservationInstanceShapesConfig <a name="DataOciCoreComputeCapacityReservationInstanceShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

&dataocicorecomputecapacityreservationinstanceshapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AvailabilityDomain: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#compartment_id DataOciCoreComputeCapacityReservationInstanceShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#availability_domain DataOciCoreComputeCapacityReservationInstanceShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#display_name DataOciCoreComputeCapacityReservationInstanceShapes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#id DataOciCoreComputeCapacityReservationInstanceShapes#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#compartment_id DataOciCoreComputeCapacityReservationInstanceShapes#compartment_id}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#availability_domain DataOciCoreComputeCapacityReservationInstanceShapes#availability_domain}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#display_name DataOciCoreComputeCapacityReservationInstanceShapes#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#filter DataOciCoreComputeCapacityReservationInstanceShapes#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#id DataOciCoreComputeCapacityReservationInstanceShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreComputeCapacityReservationInstanceShapesFilter <a name="DataOciCoreComputeCapacityReservationInstanceShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

&dataocicorecomputecapacityreservationinstanceshapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#name DataOciCoreComputeCapacityReservationInstanceShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#values DataOciCoreComputeCapacityReservationInstanceShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#regex DataOciCoreComputeCapacityReservationInstanceShapes#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#name DataOciCoreComputeCapacityReservationInstanceShapes#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#values DataOciCoreComputeCapacityReservationInstanceShapes#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_capacity_reservation_instance_shapes#regex DataOciCoreComputeCapacityReservationInstanceShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList <a name="DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.NewDataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference <a name="DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.NewDataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.instanceShape">InstanceShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `InstanceShape`<sup>Required</sup> <a name="InstanceShape" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.instanceShape"></a>

```go
func InstanceShape() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes">DataOciCoreComputeCapacityReservationInstanceShapesComputeCapacityReservationInstanceShapes</a>

---


### DataOciCoreComputeCapacityReservationInstanceShapesFilterList <a name="DataOciCoreComputeCapacityReservationInstanceShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.NewDataOciCoreComputeCapacityReservationInstanceShapesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreComputeCapacityReservationInstanceShapesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference <a name="DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicorecomputecapacityreservationinstanceshapes"

dataocicorecomputecapacityreservationinstanceshapes.NewDataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeCapacityReservationInstanceShapes.DataOciCoreComputeCapacityReservationInstanceShapesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



