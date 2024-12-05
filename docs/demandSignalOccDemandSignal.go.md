# `demandSignalOccDemandSignal` Submodule <a name="`demandSignalOccDemandSignal` Submodule" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DemandSignalOccDemandSignal <a name="DemandSignalOccDemandSignal" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal oci_demand_signal_occ_demand_signal}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignal(scope Construct, id *string, config DemandSignalOccDemandSignalConfig) DemandSignalOccDemandSignal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig">DemandSignalOccDemandSignalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig">DemandSignalOccDemandSignalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals">PutOccDemandSignals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations">PutPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId">ResetOccDemandSignalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations">ResetPatchOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOccDemandSignals` <a name="PutOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals"></a>

```go
func PutOccDemandSignals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putOccDemandSignals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPatchOperations` <a name="PutPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations"></a>

```go
func PutPatchOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putPatchOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts"></a>

```go
func PutTimeouts(value DemandSignalOccDemandSignalTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetId"></a>

```go
func ResetId()
```

##### `ResetOccDemandSignalId` <a name="ResetOccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetOccDemandSignalId"></a>

```go
func ResetOccDemandSignalId()
```

##### `ResetPatchOperations` <a name="ResetPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetPatchOperations"></a>

```go
func ResetPatchOperations()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.DemandSignalOccDemandSignal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.DemandSignalOccDemandSignal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.DemandSignalOccDemandSignal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.DemandSignalOccDemandSignal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DemandSignalOccDemandSignal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DemandSignalOccDemandSignal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DemandSignalOccDemandSignal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DemandSignalOccDemandSignal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals">OccDemandSignals</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations">PatchOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput">IsActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput">OccDemandSignalIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput">OccDemandSignalsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput">PatchOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive">IsActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `OccDemandSignals`<sup>Required</sup> <a name="OccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignals"></a>

```go
func OccDemandSignals() DemandSignalOccDemandSignalOccDemandSignalsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList">DemandSignalOccDemandSignalOccDemandSignalsList</a>

---

##### `PatchOperations`<sup>Required</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperations"></a>

```go
func PatchOperations() DemandSignalOccDemandSignalPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList">DemandSignalOccDemandSignalPatchOperationsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeouts"></a>

```go
func Timeouts() DemandSignalOccDemandSignalTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference">DemandSignalOccDemandSignalTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActiveInput"></a>

```go
func IsActiveInput() interface{}
```

- *Type:* interface{}

---

##### `OccDemandSignalIdInput`<sup>Optional</sup> <a name="OccDemandSignalIdInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalIdInput"></a>

```go
func OccDemandSignalIdInput() *string
```

- *Type:* *string

---

##### `OccDemandSignalsInput`<sup>Optional</sup> <a name="OccDemandSignalsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalsInput"></a>

```go
func OccDemandSignalsInput() interface{}
```

- *Type:* interface{}

---

##### `PatchOperationsInput`<sup>Optional</sup> <a name="PatchOperationsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.patchOperationsInput"></a>

```go
func PatchOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.isActive"></a>

```go
func IsActive() interface{}
```

- *Type:* interface{}

---

##### `OccDemandSignalId`<sup>Required</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.occDemandSignalId"></a>

```go
func OccDemandSignalId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DemandSignalOccDemandSignalConfig <a name="DemandSignalOccDemandSignalConfig" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

&demandsignaloccdemandsignal.DemandSignalOccDemandSignalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	IsActive: interface{},
	OccDemandSignals: interface{},
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	OccDemandSignalId: *string,
	PatchOperations: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive">IsActive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals">OccDemandSignals</a></code> | <code>interface{}</code> | occ_demand_signals block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId">OccDemandSignalId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations">PatchOperations</a></code> | <code>interface{}</code> | patch_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#compartment_id DemandSignalOccDemandSignal#compartment_id}.

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.isActive"></a>

```go
IsActive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#is_active DemandSignalOccDemandSignal#is_active}.

---

##### `OccDemandSignals`<sup>Required</sup> <a name="OccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignals"></a>

```go
OccDemandSignals interface{}
```

- *Type:* interface{}

occ_demand_signals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signals DemandSignalOccDemandSignal#occ_demand_signals}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#defined_tags DemandSignalOccDemandSignal#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#display_name DemandSignalOccDemandSignal#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#freeform_tags DemandSignalOccDemandSignal#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#id DemandSignalOccDemandSignal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OccDemandSignalId`<sup>Optional</sup> <a name="OccDemandSignalId" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.occDemandSignalId"></a>

```go
OccDemandSignalId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#occ_demand_signal_id DemandSignalOccDemandSignal#occ_demand_signal_id}.

---

##### `PatchOperations`<sup>Optional</sup> <a name="PatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.patchOperations"></a>

```go
PatchOperations interface{}
```

- *Type:* interface{}

patch_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#patch_operations DemandSignalOccDemandSignal#patch_operations}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalConfig.property.timeouts"></a>

```go
Timeouts DemandSignalOccDemandSignalTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts">DemandSignalOccDemandSignalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#timeouts DemandSignalOccDemandSignal#timeouts}

---

### DemandSignalOccDemandSignalOccDemandSignals <a name="DemandSignalOccDemandSignalOccDemandSignals" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

&demandsignaloccdemandsignal.DemandSignalOccDemandSignalOccDemandSignals {
	ResourceType: *string,
	Units: *string,
	Values: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units">Units</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values">Values</a></code> | <code>interface{}</code> | values block. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#resource_type DemandSignalOccDemandSignal#resource_type}.

---

##### `Units`<sup>Required</sup> <a name="Units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.units"></a>

```go
Units *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#units DemandSignalOccDemandSignal#units}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignals.property.values"></a>

```go
Values interface{}
```

- *Type:* interface{}

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#values DemandSignalOccDemandSignal#values}

---

### DemandSignalOccDemandSignalOccDemandSignalsValues <a name="DemandSignalOccDemandSignalOccDemandSignalsValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

&demandsignaloccdemandsignal.DemandSignalOccDemandSignalOccDemandSignalsValues {
	TimeExpected: *string,
	Value: *f64,
	Comments: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected">TimeExpected</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments">Comments</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}. |

---

##### `TimeExpected`<sup>Required</sup> <a name="TimeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.timeExpected"></a>

```go
TimeExpected *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#time_expected DemandSignalOccDemandSignal#time_expected}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValues.property.comments"></a>

```go
Comments *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#comments DemandSignalOccDemandSignal#comments}.

---

### DemandSignalOccDemandSignalPatchOperations <a name="DemandSignalOccDemandSignalPatchOperations" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

&demandsignaloccdemandsignal.DemandSignalOccDemandSignalPatchOperations {
	From: *string,
	Operation: *string,
	Selection: *string,
	Value: *map[string]*string,
	Position: *string,
	SelectedItem: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from">From</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation">Operation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection">Selection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value">Value</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position">Position</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem">SelectedItem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}. |

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.from"></a>

```go
From *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#from DemandSignalOccDemandSignal#from}.

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.operation"></a>

```go
Operation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#operation DemandSignalOccDemandSignal#operation}.

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selection"></a>

```go
Selection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selection DemandSignalOccDemandSignal#selection}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.value"></a>

```go
Value *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#value DemandSignalOccDemandSignal#value}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.position"></a>

```go
Position *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#position DemandSignalOccDemandSignal#position}.

---

##### `SelectedItem`<sup>Optional</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperations.property.selectedItem"></a>

```go
SelectedItem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#selected_item DemandSignalOccDemandSignal#selected_item}.

---

### DemandSignalOccDemandSignalTimeouts <a name="DemandSignalOccDemandSignalTimeouts" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

&demandsignaloccdemandsignal.DemandSignalOccDemandSignalTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#create DemandSignalOccDemandSignal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#delete DemandSignalOccDemandSignal#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/demand_signal_occ_demand_signal#update DemandSignalOccDemandSignal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DemandSignalOccDemandSignalOccDemandSignalsList <a name="DemandSignalOccDemandSignalOccDemandSignalsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignalOccDemandSignalsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DemandSignalOccDemandSignalOccDemandSignalsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get"></a>

```go
func Get(index *f64) DemandSignalOccDemandSignalOccDemandSignalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DemandSignalOccDemandSignalOccDemandSignalsOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignalOccDemandSignalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DemandSignalOccDemandSignalOccDemandSignalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues">PutValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValues` <a name="PutValues" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues"></a>

```go
func PutValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.putValues.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.values"></a>

```go
func Values() DemandSignalOccDemandSignalOccDemandSignalsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList">DemandSignalOccDemandSignalOccDemandSignalsValuesList</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesList <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignalOccDemandSignalsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DemandSignalOccDemandSignalOccDemandSignalsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get"></a>

```go
func Get(index *f64) DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference <a name="DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments">ResetComments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComments` <a name="ResetComments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.resetComments"></a>

```go
func ResetComments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput">CommentsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput">TimeExpectedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected">TimeExpected</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.commentsInput"></a>

```go
func CommentsInput() *string
```

- *Type:* *string

---

##### `TimeExpectedInput`<sup>Optional</sup> <a name="TimeExpectedInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpectedInput"></a>

```go
func TimeExpectedInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `TimeExpected`<sup>Required</sup> <a name="TimeExpected" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.timeExpected"></a>

```go
func TimeExpected() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalOccDemandSignalsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DemandSignalOccDemandSignalPatchOperationsList <a name="DemandSignalOccDemandSignalPatchOperationsList" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignalPatchOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DemandSignalOccDemandSignalPatchOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get"></a>

```go
func Get(index *f64) DemandSignalOccDemandSignalPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DemandSignalOccDemandSignalPatchOperationsOutputReference <a name="DemandSignalOccDemandSignalPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignalPatchOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DemandSignalOccDemandSignalPatchOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem">ResetSelectedItem</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPosition` <a name="ResetPosition" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetSelectedItem` <a name="ResetSelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.resetSelectedItem"></a>

```go
func ResetSelectedItem()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput">FromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput">OperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput">PositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput">SelectedItemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput">SelectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput">ValueInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from">From</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation">Operation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position">Position</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem">SelectedItem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection">Selection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value">Value</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.fromInput"></a>

```go
func FromInput() *string
```

- *Type:* *string

---

##### `OperationInput`<sup>Optional</sup> <a name="OperationInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operationInput"></a>

```go
func OperationInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.positionInput"></a>

```go
func PositionInput() *string
```

- *Type:* *string

---

##### `SelectedItemInput`<sup>Optional</sup> <a name="SelectedItemInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItemInput"></a>

```go
func SelectedItemInput() *string
```

- *Type:* *string

---

##### `SelectionInput`<sup>Optional</sup> <a name="SelectionInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectionInput"></a>

```go
func SelectionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.valueInput"></a>

```go
func ValueInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `From`<sup>Required</sup> <a name="From" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.from"></a>

```go
func From() *string
```

- *Type:* *string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.operation"></a>

```go
func Operation() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.position"></a>

```go
func Position() *string
```

- *Type:* *string

---

##### `SelectedItem`<sup>Required</sup> <a name="SelectedItem" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selectedItem"></a>

```go
func SelectedItem() *string
```

- *Type:* *string

---

##### `Selection`<sup>Required</sup> <a name="Selection" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.selection"></a>

```go
func Selection() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.value"></a>

```go
func Value() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalPatchOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DemandSignalOccDemandSignalTimeoutsOutputReference <a name="DemandSignalOccDemandSignalTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/demandsignaloccdemandsignal"

demandsignaloccdemandsignal.NewDemandSignalOccDemandSignalTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DemandSignalOccDemandSignalTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.demandSignalOccDemandSignal.DemandSignalOccDemandSignalTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



