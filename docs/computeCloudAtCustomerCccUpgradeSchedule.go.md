# `computeCloudAtCustomerCccUpgradeSchedule` Submodule <a name="`computeCloudAtCustomerCccUpgradeSchedule` Submodule" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeCloudAtCustomerCccUpgradeSchedule <a name="ComputeCloudAtCustomerCccUpgradeSchedule" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule oci_compute_cloud_at_customer_ccc_upgrade_schedule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.NewComputeCloudAtCustomerCccUpgradeSchedule(scope Construct, id *string, config ComputeCloudAtCustomerCccUpgradeScheduleConfig) ComputeCloudAtCustomerCccUpgradeSchedule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig">ComputeCloudAtCustomerCccUpgradeScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig">ComputeCloudAtCustomerCccUpgradeScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents">PutEvents</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEvents` <a name="PutEvents" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents"></a>

```go
func PutEvents(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putEvents.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts"></a>

```go
func PutTimeouts(value ComputeCloudAtCustomerCccUpgradeScheduleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.ComputeCloudAtCustomerCccUpgradeSchedule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.ComputeCloudAtCustomerCccUpgradeSchedule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.ComputeCloudAtCustomerCccUpgradeSchedule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.ComputeCloudAtCustomerCccUpgradeSchedule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeCloudAtCustomerCccUpgradeSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeCloudAtCustomerCccUpgradeSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeCloudAtCustomerCccUpgradeSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeCloudAtCustomerCccUpgradeSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.events">Events</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList">ComputeCloudAtCustomerCccUpgradeScheduleEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds">InfrastructureIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference">ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.eventsInput">EventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.events"></a>

```go
func Events() ComputeCloudAtCustomerCccUpgradeScheduleEventsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList">ComputeCloudAtCustomerCccUpgradeScheduleEventsList</a>

---

##### `InfrastructureIds`<sup>Required</sup> <a name="InfrastructureIds" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.infrastructureIds"></a>

```go
func InfrastructureIds() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeouts"></a>

```go
func Timeouts() ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference">ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.eventsInput"></a>

```go
func EventsInput() interface{}
```

- *Type:* interface{}

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeSchedule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeCloudAtCustomerCccUpgradeScheduleConfig <a name="ComputeCloudAtCustomerCccUpgradeScheduleConfig" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

&computecloudatcustomercccupgradeschedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Events: interface{},
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.events">Events</a></code> | <code>interface{}</code> | events block. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#compartment_id ComputeCloudAtCustomerCccUpgradeSchedule#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#display_name ComputeCloudAtCustomerCccUpgradeSchedule#display_name}.

---

##### `Events`<sup>Required</sup> <a name="Events" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.events"></a>

```go
Events interface{}
```

- *Type:* interface{}

events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#events ComputeCloudAtCustomerCccUpgradeSchedule#events}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#defined_tags ComputeCloudAtCustomerCccUpgradeSchedule#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#freeform_tags ComputeCloudAtCustomerCccUpgradeSchedule#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#id ComputeCloudAtCustomerCccUpgradeSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleConfig.property.timeouts"></a>

```go
Timeouts ComputeCloudAtCustomerCccUpgradeScheduleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts">ComputeCloudAtCustomerCccUpgradeScheduleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#timeouts ComputeCloudAtCustomerCccUpgradeSchedule#timeouts}

---

### ComputeCloudAtCustomerCccUpgradeScheduleEvents <a name="ComputeCloudAtCustomerCccUpgradeScheduleEvents" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

&computecloudatcustomercccupgradeschedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents {
	Description: *string,
	ScheduleEventDuration: *string,
	TimeStart: *string,
	ScheduleEventRecurrences: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventDuration">ScheduleEventDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_duration ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#time_start ComputeCloudAtCustomerCccUpgradeSchedule#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventRecurrences">ScheduleEventRecurrences</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_recurrences ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_recurrences}. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#description ComputeCloudAtCustomerCccUpgradeSchedule#description}.

---

##### `ScheduleEventDuration`<sup>Required</sup> <a name="ScheduleEventDuration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventDuration"></a>

```go
ScheduleEventDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_duration ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_duration}.

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#time_start ComputeCloudAtCustomerCccUpgradeSchedule#time_start}.

---

##### `ScheduleEventRecurrences`<sup>Optional</sup> <a name="ScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEvents.property.scheduleEventRecurrences"></a>

```go
ScheduleEventRecurrences *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#schedule_event_recurrences ComputeCloudAtCustomerCccUpgradeSchedule#schedule_event_recurrences}.

---

### ComputeCloudAtCustomerCccUpgradeScheduleTimeouts <a name="ComputeCloudAtCustomerCccUpgradeScheduleTimeouts" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

&computecloudatcustomercccupgradeschedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#create ComputeCloudAtCustomerCccUpgradeSchedule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#delete ComputeCloudAtCustomerCccUpgradeSchedule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#update ComputeCloudAtCustomerCccUpgradeSchedule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#create ComputeCloudAtCustomerCccUpgradeSchedule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#delete ComputeCloudAtCustomerCccUpgradeSchedule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/compute_cloud_at_customer_ccc_upgrade_schedule#update ComputeCloudAtCustomerCccUpgradeSchedule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeCloudAtCustomerCccUpgradeScheduleEventsList <a name="ComputeCloudAtCustomerCccUpgradeScheduleEventsList" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.NewComputeCloudAtCustomerCccUpgradeScheduleEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeCloudAtCustomerCccUpgradeScheduleEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get"></a>

```go
func Get(index *f64) ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference <a name="ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.NewComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resetScheduleEventRecurrences">ResetScheduleEventRecurrences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScheduleEventRecurrences` <a name="ResetScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.resetScheduleEventRecurrences"></a>

```go
func ResetScheduleEventRecurrences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDurationInput">ScheduleEventDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrencesInput">ScheduleEventRecurrencesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration">ScheduleEventDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences">ScheduleEventRecurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ScheduleEventDurationInput`<sup>Optional</sup> <a name="ScheduleEventDurationInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDurationInput"></a>

```go
func ScheduleEventDurationInput() *string
```

- *Type:* *string

---

##### `ScheduleEventRecurrencesInput`<sup>Optional</sup> <a name="ScheduleEventRecurrencesInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrencesInput"></a>

```go
func ScheduleEventRecurrencesInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ScheduleEventDuration`<sup>Required</sup> <a name="ScheduleEventDuration" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventDuration"></a>

```go
func ScheduleEventDuration() *string
```

- *Type:* *string

---

##### `ScheduleEventRecurrences`<sup>Required</sup> <a name="ScheduleEventRecurrences" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.scheduleEventRecurrences"></a>

```go
func ScheduleEventRecurrences() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference <a name="ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/computecloudatcustomercccupgradeschedule"

computecloudatcustomercccupgradeschedule.NewComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.computeCloudAtCustomerCccUpgradeSchedule.ComputeCloudAtCustomerCccUpgradeScheduleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



