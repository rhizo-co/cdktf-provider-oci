# `coreComputeCapacityReservation` Submodule <a name="`coreComputeCapacityReservation` Submodule" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreComputeCapacityReservation <a name="CoreComputeCapacityReservation" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation oci_core_compute_capacity_reservation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.NewCoreComputeCapacityReservation(scope Construct, id *string, config CoreComputeCapacityReservationConfig) CoreComputeCapacityReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig">CoreComputeCapacityReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig">CoreComputeCapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.putInstanceReservationConfigs">PutInstanceReservationConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetIsDefaultReservation">ResetIsDefaultReservation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInstanceReservationConfigs` <a name="PutInstanceReservationConfigs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.putInstanceReservationConfigs"></a>

```go
func PutInstanceReservationConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.putInstanceReservationConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.putTimeouts"></a>

```go
func PutTimeouts(value CoreComputeCapacityReservationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts">CoreComputeCapacityReservationTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDefaultReservation` <a name="ResetIsDefaultReservation" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetIsDefaultReservation"></a>

```go
func ResetIsDefaultReservation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreComputeCapacityReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.CoreComputeCapacityReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.CoreComputeCapacityReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.CoreComputeCapacityReservation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.CoreComputeCapacityReservation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreComputeCapacityReservation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreComputeCapacityReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreComputeCapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreComputeCapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.instanceReservationConfigs">InstanceReservationConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList">CoreComputeCapacityReservationInstanceReservationConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.reservedInstanceCount">ReservedInstanceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference">CoreComputeCapacityReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.usedInstanceCount">UsedInstanceCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.instanceReservationConfigsInput">InstanceReservationConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.isDefaultReservationInput">IsDefaultReservationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.isDefaultReservation">IsDefaultReservation</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceReservationConfigs`<sup>Required</sup> <a name="InstanceReservationConfigs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.instanceReservationConfigs"></a>

```go
func InstanceReservationConfigs() CoreComputeCapacityReservationInstanceReservationConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList">CoreComputeCapacityReservationInstanceReservationConfigsList</a>

---

##### `ReservedInstanceCount`<sup>Required</sup> <a name="ReservedInstanceCount" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.reservedInstanceCount"></a>

```go
func ReservedInstanceCount() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeouts"></a>

```go
func Timeouts() CoreComputeCapacityReservationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference">CoreComputeCapacityReservationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UsedInstanceCount`<sup>Required</sup> <a name="UsedInstanceCount" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.usedInstanceCount"></a>

```go
func UsedInstanceCount() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceReservationConfigsInput`<sup>Optional</sup> <a name="InstanceReservationConfigsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.instanceReservationConfigsInput"></a>

```go
func InstanceReservationConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `IsDefaultReservationInput`<sup>Optional</sup> <a name="IsDefaultReservationInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.isDefaultReservationInput"></a>

```go
func IsDefaultReservationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefaultReservation`<sup>Required</sup> <a name="IsDefaultReservation" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.isDefaultReservation"></a>

```go
func IsDefaultReservation() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreComputeCapacityReservationConfig <a name="CoreComputeCapacityReservationConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

&corecomputecapacityreservation.CoreComputeCapacityReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	InstanceReservationConfigs: interface{},
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsDefaultReservation: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#availability_domain CoreComputeCapacityReservation#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#compartment_id CoreComputeCapacityReservation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.instanceReservationConfigs">InstanceReservationConfigs</a></code> | <code>interface{}</code> | instance_reservation_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#defined_tags CoreComputeCapacityReservation#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#display_name CoreComputeCapacityReservation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#freeform_tags CoreComputeCapacityReservation#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#id CoreComputeCapacityReservation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.isDefaultReservation">IsDefaultReservation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#is_default_reservation CoreComputeCapacityReservation#is_default_reservation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts">CoreComputeCapacityReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#availability_domain CoreComputeCapacityReservation#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#compartment_id CoreComputeCapacityReservation#compartment_id}.

---

##### `InstanceReservationConfigs`<sup>Required</sup> <a name="InstanceReservationConfigs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.instanceReservationConfigs"></a>

```go
InstanceReservationConfigs interface{}
```

- *Type:* interface{}

instance_reservation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#instance_reservation_configs CoreComputeCapacityReservation#instance_reservation_configs}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#defined_tags CoreComputeCapacityReservation#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#display_name CoreComputeCapacityReservation#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#freeform_tags CoreComputeCapacityReservation#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#id CoreComputeCapacityReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDefaultReservation`<sup>Optional</sup> <a name="IsDefaultReservation" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.isDefaultReservation"></a>

```go
IsDefaultReservation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#is_default_reservation CoreComputeCapacityReservation#is_default_reservation}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationConfig.property.timeouts"></a>

```go
Timeouts CoreComputeCapacityReservationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts">CoreComputeCapacityReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#timeouts CoreComputeCapacityReservation#timeouts}

---

### CoreComputeCapacityReservationInstanceReservationConfigs <a name="CoreComputeCapacityReservationInstanceReservationConfigs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

&corecomputecapacityreservation.CoreComputeCapacityReservationInstanceReservationConfigs {
	InstanceShape: *string,
	ReservedCount: *string,
	ClusterConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig,
	ClusterPlacementGroupId: *string,
	FaultDomain: *string,
	InstanceShapeConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.instanceShape">InstanceShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#instance_shape CoreComputeCapacityReservation#instance_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.reservedCount">ReservedCount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#reserved_count CoreComputeCapacityReservation#reserved_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a></code> | cluster_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#cluster_placement_group_id CoreComputeCapacityReservation#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#fault_domain CoreComputeCapacityReservation#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.instanceShapeConfig">InstanceShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a></code> | instance_shape_config block. |

---

##### `InstanceShape`<sup>Required</sup> <a name="InstanceShape" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.instanceShape"></a>

```go
InstanceShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#instance_shape CoreComputeCapacityReservation#instance_shape}.

---

##### `ReservedCount`<sup>Required</sup> <a name="ReservedCount" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.reservedCount"></a>

```go
ReservedCount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#reserved_count CoreComputeCapacityReservation#reserved_count}.

---

##### `ClusterConfig`<sup>Optional</sup> <a name="ClusterConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.clusterConfig"></a>

```go
ClusterConfig CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#cluster_config CoreComputeCapacityReservation#cluster_config}

---

##### `ClusterPlacementGroupId`<sup>Optional</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.clusterPlacementGroupId"></a>

```go
ClusterPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#cluster_placement_group_id CoreComputeCapacityReservation#cluster_placement_group_id}.

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.faultDomain"></a>

```go
FaultDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#fault_domain CoreComputeCapacityReservation#fault_domain}.

---

##### `InstanceShapeConfig`<sup>Optional</sup> <a name="InstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigs.property.instanceShapeConfig"></a>

```go
InstanceShapeConfig CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a>

instance_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#instance_shape_config CoreComputeCapacityReservation#instance_shape_config}

---

### CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig <a name="CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

&corecomputecapacityreservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig {
	HpcIslandId: *string,
	NetworkBlockIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig.property.hpcIslandId">HpcIslandId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#hpc_island_id CoreComputeCapacityReservation#hpc_island_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig.property.networkBlockIds">NetworkBlockIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#network_block_ids CoreComputeCapacityReservation#network_block_ids}. |

---

##### `HpcIslandId`<sup>Required</sup> <a name="HpcIslandId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig.property.hpcIslandId"></a>

```go
HpcIslandId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#hpc_island_id CoreComputeCapacityReservation#hpc_island_id}.

---

##### `NetworkBlockIds`<sup>Optional</sup> <a name="NetworkBlockIds" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig.property.networkBlockIds"></a>

```go
NetworkBlockIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#network_block_ids CoreComputeCapacityReservation#network_block_ids}.

---

### CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig <a name="CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

&corecomputecapacityreservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig {
	MemoryInGbs: *f64,
	Ocpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#memory_in_gbs CoreComputeCapacityReservation#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#ocpus CoreComputeCapacityReservation#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#memory_in_gbs CoreComputeCapacityReservation#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#ocpus CoreComputeCapacityReservation#ocpus}.

---

### CoreComputeCapacityReservationTimeouts <a name="CoreComputeCapacityReservationTimeouts" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

&corecomputecapacityreservation.CoreComputeCapacityReservationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#create CoreComputeCapacityReservation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#delete CoreComputeCapacityReservation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#update CoreComputeCapacityReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#create CoreComputeCapacityReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#delete CoreComputeCapacityReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_compute_capacity_reservation#update CoreComputeCapacityReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference <a name="CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.NewCoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resetNetworkBlockIds">ResetNetworkBlockIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkBlockIds` <a name="ResetNetworkBlockIds" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.resetNetworkBlockIds"></a>

```go
func ResetNetworkBlockIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandIdInput">HpcIslandIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIdsInput">NetworkBlockIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandId">HpcIslandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIds">NetworkBlockIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HpcIslandIdInput`<sup>Optional</sup> <a name="HpcIslandIdInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandIdInput"></a>

```go
func HpcIslandIdInput() *string
```

- *Type:* *string

---

##### `NetworkBlockIdsInput`<sup>Optional</sup> <a name="NetworkBlockIdsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIdsInput"></a>

```go
func NetworkBlockIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HpcIslandId`<sup>Required</sup> <a name="HpcIslandId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.hpcIslandId"></a>

```go
func HpcIslandId() *string
```

- *Type:* *string

---

##### `NetworkBlockIds`<sup>Required</sup> <a name="NetworkBlockIds" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.networkBlockIds"></a>

```go
func NetworkBlockIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a>

---


### CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference <a name="CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.NewCoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a>

---


### CoreComputeCapacityReservationInstanceReservationConfigsList <a name="CoreComputeCapacityReservationInstanceReservationConfigsList" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.NewCoreComputeCapacityReservationInstanceReservationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreComputeCapacityReservationInstanceReservationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.get"></a>

```go
func Get(index *f64) CoreComputeCapacityReservationInstanceReservationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreComputeCapacityReservationInstanceReservationConfigsOutputReference <a name="CoreComputeCapacityReservationInstanceReservationConfigsOutputReference" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.NewCoreComputeCapacityReservationInstanceReservationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreComputeCapacityReservationInstanceReservationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.putClusterConfig">PutClusterConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.putInstanceShapeConfig">PutInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetClusterConfig">ResetClusterConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetClusterPlacementGroupId">ResetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetInstanceShapeConfig">ResetInstanceShapeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterConfig` <a name="PutClusterConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.putClusterConfig"></a>

```go
func PutClusterConfig(value CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.putClusterConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a>

---

##### `PutInstanceShapeConfig` <a name="PutInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.putInstanceShapeConfig"></a>

```go
func PutInstanceShapeConfig(value CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.putInstanceShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a>

---

##### `ResetClusterConfig` <a name="ResetClusterConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetClusterConfig"></a>

```go
func ResetClusterConfig()
```

##### `ResetClusterPlacementGroupId` <a name="ResetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetClusterPlacementGroupId"></a>

```go
func ResetClusterPlacementGroupId()
```

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetFaultDomain"></a>

```go
func ResetFaultDomain()
```

##### `ResetInstanceShapeConfig` <a name="ResetInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.resetInstanceShapeConfig"></a>

```go
func ResetInstanceShapeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeConfig">InstanceShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.usedCount">UsedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterConfigInput">ClusterConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterPlacementGroupIdInput">ClusterPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.faultDomainInput">FaultDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeConfigInput">InstanceShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeInput">InstanceShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.reservedCountInput">ReservedCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShape">InstanceShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.reservedCount">ReservedCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterConfig"></a>

```go
func ClusterConfig() CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfigOutputReference</a>

---

##### `InstanceShapeConfig`<sup>Required</sup> <a name="InstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeConfig"></a>

```go
func InstanceShapeConfig() CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfigOutputReference</a>

---

##### `UsedCount`<sup>Required</sup> <a name="UsedCount" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.usedCount"></a>

```go
func UsedCount() *string
```

- *Type:* *string

---

##### `ClusterConfigInput`<sup>Optional</sup> <a name="ClusterConfigInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterConfigInput"></a>

```go
func ClusterConfigInput() CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig">CoreComputeCapacityReservationInstanceReservationConfigsClusterConfig</a>

---

##### `ClusterPlacementGroupIdInput`<sup>Optional</sup> <a name="ClusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterPlacementGroupIdInput"></a>

```go
func ClusterPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.faultDomainInput"></a>

```go
func FaultDomainInput() *string
```

- *Type:* *string

---

##### `InstanceShapeConfigInput`<sup>Optional</sup> <a name="InstanceShapeConfigInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeConfigInput"></a>

```go
func InstanceShapeConfigInput() CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig">CoreComputeCapacityReservationInstanceReservationConfigsInstanceShapeConfig</a>

---

##### `InstanceShapeInput`<sup>Optional</sup> <a name="InstanceShapeInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShapeInput"></a>

```go
func InstanceShapeInput() *string
```

- *Type:* *string

---

##### `ReservedCountInput`<sup>Optional</sup> <a name="ReservedCountInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.reservedCountInput"></a>

```go
func ReservedCountInput() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `InstanceShape`<sup>Required</sup> <a name="InstanceShape" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.instanceShape"></a>

```go
func InstanceShape() *string
```

- *Type:* *string

---

##### `ReservedCount`<sup>Required</sup> <a name="ReservedCount" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.reservedCount"></a>

```go
func ReservedCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationInstanceReservationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreComputeCapacityReservationTimeoutsOutputReference <a name="CoreComputeCapacityReservationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecomputecapacityreservation"

corecomputecapacityreservation.NewCoreComputeCapacityReservationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreComputeCapacityReservationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreComputeCapacityReservation.CoreComputeCapacityReservationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



