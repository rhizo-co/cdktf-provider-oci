# `coreInstance` Submodule <a name="`coreInstance` Submodule" id="rhizo-co-terraform-provider-oci.coreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstance <a name="CoreInstance" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance oci_core_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstance(scope Construct, id *string, config CoreInstanceConfig) CoreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig">CoreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig">CoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig">PutAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig">PutAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails">PutCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions">PutInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions">PutLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments">PutLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig">PutPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig">PutPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig">PutShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails">PutSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig">ResetAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync">ResetAsync</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig">ResetAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId">ResetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId">ResetComputeClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails">ResetCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId">ResetDedicatedVmHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata">ResetExtendedMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain">ResetFaultDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId">ResetInstanceConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions">ResetInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript">ResetIpxeScript</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled">ResetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions">ResetLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments">ResetLaunchVolumeAttachments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig">ResetPlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig">ResetPreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume">ResetPreserveBootVolume</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch">ResetPreserveDataVolumesCreatedAtLaunch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig">ResetShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails">ResetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint">ResetUpdateOperationConstraint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentConfig` <a name="PutAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig"></a>

```go
func PutAgentConfig(value CoreInstanceAgentConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAgentConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `PutAvailabilityConfig` <a name="PutAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig"></a>

```go
func PutAvailabilityConfig(value CoreInstanceAvailabilityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putAvailabilityConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `PutCreateVnicDetails` <a name="PutCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails"></a>

```go
func PutCreateVnicDetails(value CoreInstanceCreateVnicDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putCreateVnicDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `PutInstanceOptions` <a name="PutInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions"></a>

```go
func PutInstanceOptions(value CoreInstanceInstanceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putInstanceOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `PutLaunchOptions` <a name="PutLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions"></a>

```go
func PutLaunchOptions(value CoreInstanceLaunchOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `PutLaunchVolumeAttachments` <a name="PutLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments"></a>

```go
func PutLaunchVolumeAttachments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putLaunchVolumeAttachments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlatformConfig` <a name="PutPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig"></a>

```go
func PutPlatformConfig(value CoreInstancePlatformConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPlatformConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `PutPreemptibleInstanceConfig` <a name="PutPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig"></a>

```go
func PutPreemptibleInstanceConfig(value CoreInstancePreemptibleInstanceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putPreemptibleInstanceConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `PutShapeConfig` <a name="PutShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig"></a>

```go
func PutShapeConfig(value CoreInstanceShapeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `PutSourceDetails` <a name="PutSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails"></a>

```go
func PutSourceDetails(value CoreInstanceSourceDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts"></a>

```go
func PutTimeouts(value CoreInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

---

##### `ResetAgentConfig` <a name="ResetAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAgentConfig"></a>

```go
func ResetAgentConfig()
```

##### `ResetAsync` <a name="ResetAsync" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAsync"></a>

```go
func ResetAsync()
```

##### `ResetAvailabilityConfig` <a name="ResetAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetAvailabilityConfig"></a>

```go
func ResetAvailabilityConfig()
```

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetClusterPlacementGroupId` <a name="ResetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetClusterPlacementGroupId"></a>

```go
func ResetClusterPlacementGroupId()
```

##### `ResetComputeClusterId` <a name="ResetComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetComputeClusterId"></a>

```go
func ResetComputeClusterId()
```

##### `ResetCreateVnicDetails` <a name="ResetCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetCreateVnicDetails"></a>

```go
func ResetCreateVnicDetails()
```

##### `ResetDedicatedVmHostId` <a name="ResetDedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDedicatedVmHostId"></a>

```go
func ResetDedicatedVmHostId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExtendedMetadata` <a name="ResetExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetExtendedMetadata"></a>

```go
func ResetExtendedMetadata()
```

##### `ResetFaultDomain` <a name="ResetFaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFaultDomain"></a>

```go
func ResetFaultDomain()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetHostnameLabel"></a>

```go
func ResetHostnameLabel()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetImage` <a name="ResetImage" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetImage"></a>

```go
func ResetImage()
```

##### `ResetInstanceConfigurationId` <a name="ResetInstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceConfigurationId"></a>

```go
func ResetInstanceConfigurationId()
```

##### `ResetInstanceOptions` <a name="ResetInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetInstanceOptions"></a>

```go
func ResetInstanceOptions()
```

##### `ResetIpxeScript` <a name="ResetIpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIpxeScript"></a>

```go
func ResetIpxeScript()
```

##### `ResetIsPvEncryptionInTransitEnabled` <a name="ResetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetIsPvEncryptionInTransitEnabled"></a>

```go
func ResetIsPvEncryptionInTransitEnabled()
```

##### `ResetLaunchOptions` <a name="ResetLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchOptions"></a>

```go
func ResetLaunchOptions()
```

##### `ResetLaunchVolumeAttachments` <a name="ResetLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetLaunchVolumeAttachments"></a>

```go
func ResetLaunchVolumeAttachments()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetPlatformConfig` <a name="ResetPlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPlatformConfig"></a>

```go
func ResetPlatformConfig()
```

##### `ResetPreemptibleInstanceConfig` <a name="ResetPreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreemptibleInstanceConfig"></a>

```go
func ResetPreemptibleInstanceConfig()
```

##### `ResetPreserveBootVolume` <a name="ResetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveBootVolume"></a>

```go
func ResetPreserveBootVolume()
```

##### `ResetPreserveDataVolumesCreatedAtLaunch` <a name="ResetPreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetPreserveDataVolumesCreatedAtLaunch"></a>

```go
func ResetPreserveDataVolumesCreatedAtLaunch()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSecurityAttributes"></a>

```go
func ResetSecurityAttributes()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShape"></a>

```go
func ResetShape()
```

##### `ResetShapeConfig` <a name="ResetShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetShapeConfig"></a>

```go
func ResetShapeConfig()
```

##### `ResetSourceDetails` <a name="ResetSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSourceDetails"></a>

```go
func ResetSourceDetails()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetState"></a>

```go
func ResetState()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdateOperationConstraint` <a name="ResetUpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.resetUpdateOperationConstraint"></a>

```go
func ResetUpdateOperationConstraint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.CoreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.CoreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.CoreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.CoreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig">AgentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig">AvailabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId">BootVolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions">InstanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode">IsCrossNumaNode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode">LaunchMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions">LaunchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments">LaunchVolumeAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig">PlatformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig">PreemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState">SecurityAttributesState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue">TimeMaintenanceRebootDue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput">AgentConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput">AsyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput">AvailabilityConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput">ClusterPlacementGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput">ComputeClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput">CreateVnicDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput">DedicatedVmHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput">ExtendedMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput">FaultDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput">InstanceConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput">InstanceOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput">IpxeScriptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput">IsPvEncryptionInTransitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput">LaunchOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput">LaunchVolumeAttachmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput">PlatformConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput">PreemptibleInstanceConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput">PreserveBootVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput">PreserveDataVolumesCreatedAtLaunchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput">ShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput">SourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput">UpdateOperationConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async">Async</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId">DedicatedVmHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata">ExtendedMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId">InstanceConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript">IpxeScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch">PreserveDataVolumesCreatedAtLaunch</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint">UpdateOperationConstraint</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentConfig`<sup>Required</sup> <a name="AgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfig"></a>

```go
func AgentConfig() CoreInstanceAgentConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference">CoreInstanceAgentConfigOutputReference</a>

---

##### `AvailabilityConfig`<sup>Required</sup> <a name="AvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfig"></a>

```go
func AvailabilityConfig() CoreInstanceAvailabilityConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference">CoreInstanceAvailabilityConfigOutputReference</a>

---

##### `BootVolumeId`<sup>Required</sup> <a name="BootVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.bootVolumeId"></a>

```go
func BootVolumeId() *string
```

- *Type:* *string

---

##### `CreateVnicDetails`<sup>Required</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetails"></a>

```go
func CreateVnicDetails() CoreInstanceCreateVnicDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference">CoreInstanceCreateVnicDetailsOutputReference</a>

---

##### `InstanceOptions`<sup>Required</sup> <a name="InstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptions"></a>

```go
func InstanceOptions() CoreInstanceInstanceOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference">CoreInstanceInstanceOptionsOutputReference</a>

---

##### `IsCrossNumaNode`<sup>Required</sup> <a name="IsCrossNumaNode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isCrossNumaNode"></a>

```go
func IsCrossNumaNode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LaunchMode`<sup>Required</sup> <a name="LaunchMode" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchMode"></a>

```go
func LaunchMode() *string
```

- *Type:* *string

---

##### `LaunchOptions`<sup>Required</sup> <a name="LaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptions"></a>

```go
func LaunchOptions() CoreInstanceLaunchOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference">CoreInstanceLaunchOptionsOutputReference</a>

---

##### `LaunchVolumeAttachments`<sup>Required</sup> <a name="LaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachments"></a>

```go
func LaunchVolumeAttachments() CoreInstanceLaunchVolumeAttachmentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList">CoreInstanceLaunchVolumeAttachmentsList</a>

---

##### `PlatformConfig`<sup>Required</sup> <a name="PlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfig"></a>

```go
func PlatformConfig() CoreInstancePlatformConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference">CoreInstancePlatformConfigOutputReference</a>

---

##### `PreemptibleInstanceConfig`<sup>Required</sup> <a name="PreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfig"></a>

```go
func PreemptibleInstanceConfig() CoreInstancePreemptibleInstanceConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference">CoreInstancePreemptibleInstanceConfigOutputReference</a>

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityAttributesState`<sup>Required</sup> <a name="SecurityAttributesState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesState"></a>

```go
func SecurityAttributesState() *string
```

- *Type:* *string

---

##### `ShapeConfig`<sup>Required</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfig"></a>

```go
func ShapeConfig() CoreInstanceShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference">CoreInstanceShapeConfigOutputReference</a>

---

##### `SourceDetails`<sup>Required</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetails"></a>

```go
func SourceDetails() CoreInstanceSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference">CoreInstanceSourceDetailsOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeMaintenanceRebootDue`<sup>Required</sup> <a name="TimeMaintenanceRebootDue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeMaintenanceRebootDue"></a>

```go
func TimeMaintenanceRebootDue() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeouts"></a>

```go
func Timeouts() CoreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference">CoreInstanceTimeoutsOutputReference</a>

---

##### `AgentConfigInput`<sup>Optional</sup> <a name="AgentConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.agentConfigInput"></a>

```go
func AgentConfigInput() CoreInstanceAgentConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---

##### `AsyncInput`<sup>Optional</sup> <a name="AsyncInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.asyncInput"></a>

```go
func AsyncInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityConfigInput`<sup>Optional</sup> <a name="AvailabilityConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityConfigInput"></a>

```go
func AvailabilityConfigInput() CoreInstanceAvailabilityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupIdInput`<sup>Optional</sup> <a name="ClusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupIdInput"></a>

```go
func ClusterPlacementGroupIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeClusterIdInput`<sup>Optional</sup> <a name="ComputeClusterIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterIdInput"></a>

```go
func ComputeClusterIdInput() *string
```

- *Type:* *string

---

##### `CreateVnicDetailsInput`<sup>Optional</sup> <a name="CreateVnicDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.createVnicDetailsInput"></a>

```go
func CreateVnicDetailsInput() CoreInstanceCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---

##### `DedicatedVmHostIdInput`<sup>Optional</sup> <a name="DedicatedVmHostIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostIdInput"></a>

```go
func DedicatedVmHostIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExtendedMetadataInput`<sup>Optional</sup> <a name="ExtendedMetadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadataInput"></a>

```go
func ExtendedMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomainInput"></a>

```go
func FaultDomainInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabelInput"></a>

```go
func HostnameLabelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InstanceConfigurationIdInput`<sup>Optional</sup> <a name="InstanceConfigurationIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationIdInput"></a>

```go
func InstanceConfigurationIdInput() *string
```

- *Type:* *string

---

##### `InstanceOptionsInput`<sup>Optional</sup> <a name="InstanceOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceOptionsInput"></a>

```go
func InstanceOptionsInput() CoreInstanceInstanceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---

##### `IpxeScriptInput`<sup>Optional</sup> <a name="IpxeScriptInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScriptInput"></a>

```go
func IpxeScriptInput() *string
```

- *Type:* *string

---

##### `IsPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabledInput"></a>

```go
func IsPvEncryptionInTransitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchOptionsInput`<sup>Optional</sup> <a name="LaunchOptionsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchOptionsInput"></a>

```go
func LaunchOptionsInput() CoreInstanceLaunchOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---

##### `LaunchVolumeAttachmentsInput`<sup>Optional</sup> <a name="LaunchVolumeAttachmentsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.launchVolumeAttachmentsInput"></a>

```go
func LaunchVolumeAttachmentsInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PlatformConfigInput`<sup>Optional</sup> <a name="PlatformConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.platformConfigInput"></a>

```go
func PlatformConfigInput() CoreInstancePlatformConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---

##### `PreemptibleInstanceConfigInput`<sup>Optional</sup> <a name="PreemptibleInstanceConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preemptibleInstanceConfigInput"></a>

```go
func PreemptibleInstanceConfigInput() CoreInstancePreemptibleInstanceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---

##### `PreserveBootVolumeInput`<sup>Optional</sup> <a name="PreserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolumeInput"></a>

```go
func PreserveBootVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `PreserveDataVolumesCreatedAtLaunchInput`<sup>Optional</sup> <a name="PreserveDataVolumesCreatedAtLaunchInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunchInput"></a>

```go
func PreserveDataVolumesCreatedAtLaunchInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributesInput"></a>

```go
func SecurityAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ShapeConfigInput`<sup>Optional</sup> <a name="ShapeConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeConfigInput"></a>

```go
func ShapeConfigInput() CoreInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SourceDetailsInput`<sup>Optional</sup> <a name="SourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.sourceDetailsInput"></a>

```go
func SourceDetailsInput() CoreInstanceSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdateOperationConstraintInput`<sup>Optional</sup> <a name="UpdateOperationConstraintInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraintInput"></a>

```go
func UpdateOperationConstraintInput() *string
```

- *Type:* *string

---

##### `Async`<sup>Required</sup> <a name="Async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.async"></a>

```go
func Async() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `ClusterPlacementGroupId`<sup>Required</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.clusterPlacementGroupId"></a>

```go
func ClusterPlacementGroupId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeClusterId`<sup>Required</sup> <a name="ComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.computeClusterId"></a>

```go
func ComputeClusterId() *string
```

- *Type:* *string

---

##### `DedicatedVmHostId`<sup>Required</sup> <a name="DedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.dedicatedVmHostId"></a>

```go
func DedicatedVmHostId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExtendedMetadata`<sup>Required</sup> <a name="ExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.extendedMetadata"></a>

```go
func ExtendedMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InstanceConfigurationId`<sup>Required</sup> <a name="InstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.instanceConfigurationId"></a>

```go
func InstanceConfigurationId() *string
```

- *Type:* *string

---

##### `IpxeScript`<sup>Required</sup> <a name="IpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.ipxeScript"></a>

```go
func IpxeScript() *string
```

- *Type:* *string

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() interface{}
```

- *Type:* interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PreserveBootVolume`<sup>Required</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveBootVolume"></a>

```go
func PreserveBootVolume() interface{}
```

- *Type:* interface{}

---

##### `PreserveDataVolumesCreatedAtLaunch`<sup>Required</sup> <a name="PreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.preserveDataVolumesCreatedAtLaunch"></a>

```go
func PreserveDataVolumesCreatedAtLaunch() interface{}
```

- *Type:* interface{}

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.securityAttributes"></a>

```go
func SecurityAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `UpdateOperationConstraint`<sup>Required</sup> <a name="UpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.updateOperationConstraint"></a>

```go
func UpdateOperationConstraint() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceAgentConfig <a name="CoreInstanceAgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceAgentConfig {
	AreAllPluginsDisabled: interface{},
	IsManagementDisabled: interface{},
	IsMonitoringDisabled: interface{},
	PluginsConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled">AreAllPluginsDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled">IsManagementDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled">IsMonitoringDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig">PluginsConfig</a></code> | <code>interface{}</code> | plugins_config block. |

---

##### `AreAllPluginsDisabled`<sup>Optional</sup> <a name="AreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.areAllPluginsDisabled"></a>

```go
AreAllPluginsDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_all_plugins_disabled CoreInstance#are_all_plugins_disabled}.

---

##### `IsManagementDisabled`<sup>Optional</sup> <a name="IsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isManagementDisabled"></a>

```go
IsManagementDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_management_disabled CoreInstance#is_management_disabled}.

---

##### `IsMonitoringDisabled`<sup>Optional</sup> <a name="IsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.isMonitoringDisabled"></a>

```go
IsMonitoringDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_monitoring_disabled CoreInstance#is_monitoring_disabled}.

---

##### `PluginsConfig`<sup>Optional</sup> <a name="PluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig.property.pluginsConfig"></a>

```go
PluginsConfig interface{}
```

- *Type:* interface{}

plugins_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#plugins_config CoreInstance#plugins_config}

---

### CoreInstanceAgentConfigPluginsConfig <a name="CoreInstanceAgentConfigPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceAgentConfigPluginsConfig {
	DesiredState: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}. |

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#desired_state CoreInstance#desired_state}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#name CoreInstance#name}.

---

### CoreInstanceAvailabilityConfig <a name="CoreInstanceAvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceAvailabilityConfig {
	IsLiveMigrationPreferred: interface{},
	RecoveryAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred">IsLiveMigrationPreferred</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction">RecoveryAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}. |

---

##### `IsLiveMigrationPreferred`<sup>Optional</sup> <a name="IsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.isLiveMigrationPreferred"></a>

```go
IsLiveMigrationPreferred interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_live_migration_preferred CoreInstance#is_live_migration_preferred}.

---

##### `RecoveryAction`<sup>Optional</sup> <a name="RecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig.property.recoveryAction"></a>

```go
RecoveryAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#recovery_action CoreInstance#recovery_action}.

---

### CoreInstanceConfig <a name="CoreInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	AgentConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceAgentConfig,
	Async: interface{},
	AvailabilityConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceAvailabilityConfig,
	CapacityReservationId: *string,
	ClusterPlacementGroupId: *string,
	ComputeClusterId: *string,
	CreateVnicDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceCreateVnicDetails,
	DedicatedVmHostId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	ExtendedMetadata: *map[string]*string,
	FaultDomain: *string,
	FreeformTags: *map[string]*string,
	HostnameLabel: *string,
	Id: *string,
	Image: *string,
	InstanceConfigurationId: *string,
	InstanceOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceInstanceOptions,
	IpxeScript: *string,
	IsPvEncryptionInTransitEnabled: interface{},
	LaunchOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceLaunchOptions,
	LaunchVolumeAttachments: interface{},
	Metadata: *map[string]*string,
	PlatformConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstancePlatformConfig,
	PreemptibleInstanceConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstancePreemptibleInstanceConfig,
	PreserveBootVolume: interface{},
	PreserveDataVolumesCreatedAtLaunch: interface{},
	SecurityAttributes: *map[string]*string,
	Shape: *string,
	ShapeConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceShapeConfig,
	SourceDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceSourceDetails,
	State: *string,
	SubnetId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceTimeouts,
	UpdateOperationConstraint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig">AgentConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | agent_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async">Async</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig">AvailabilityConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | availability_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId">ClusterPlacementGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId">ComputeClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails">CreateVnicDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | create_vnic_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId">DedicatedVmHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata">ExtendedMetadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId">InstanceConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions">InstanceOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | instance_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript">IpxeScript</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions">LaunchOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | launch_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments">LaunchVolumeAttachments</a></code> | <code>interface{}</code> | launch_volume_attachments block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig">PlatformConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | platform_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig">PreemptibleInstanceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | preemptible_instance_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch">PreserveDataVolumesCreatedAtLaunch</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig">ShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails">SourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint">UpdateOperationConstraint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_domain CoreInstance#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `AgentConfig`<sup>Optional</sup> <a name="AgentConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.agentConfig"></a>

```go
AgentConfig CoreInstanceAgentConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

agent_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#agent_config CoreInstance#agent_config}

---

##### `Async`<sup>Optional</sup> <a name="Async" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.async"></a>

```go
Async interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#async CoreInstance#async}.

---

##### `AvailabilityConfig`<sup>Optional</sup> <a name="AvailabilityConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.availabilityConfig"></a>

```go
AvailabilityConfig CoreInstanceAvailabilityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

availability_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#availability_config CoreInstance#availability_config}

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#capacity_reservation_id CoreInstance#capacity_reservation_id}.

---

##### `ClusterPlacementGroupId`<sup>Optional</sup> <a name="ClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.clusterPlacementGroupId"></a>

```go
ClusterPlacementGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#cluster_placement_group_id CoreInstance#cluster_placement_group_id}.

---

##### `ComputeClusterId`<sup>Optional</sup> <a name="ComputeClusterId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.computeClusterId"></a>

```go
ComputeClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compute_cluster_id CoreInstance#compute_cluster_id}.

---

##### `CreateVnicDetails`<sup>Optional</sup> <a name="CreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.createVnicDetails"></a>

```go
CreateVnicDetails CoreInstanceCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

create_vnic_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create_vnic_details CoreInstance#create_vnic_details}

---

##### `DedicatedVmHostId`<sup>Optional</sup> <a name="DedicatedVmHostId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.dedicatedVmHostId"></a>

```go
DedicatedVmHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#dedicated_vm_host_id CoreInstance#dedicated_vm_host_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `ExtendedMetadata`<sup>Optional</sup> <a name="ExtendedMetadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.extendedMetadata"></a>

```go
ExtendedMetadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#extended_metadata CoreInstance#extended_metadata}.

---

##### `FaultDomain`<sup>Optional</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.faultDomain"></a>

```go
FaultDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#fault_domain CoreInstance#fault_domain}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.hostnameLabel"></a>

```go
HostnameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#id CoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#image CoreInstance#image}.

---

##### `InstanceConfigurationId`<sup>Optional</sup> <a name="InstanceConfigurationId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceConfigurationId"></a>

```go
InstanceConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_configuration_id CoreInstance#instance_configuration_id}.

---

##### `InstanceOptions`<sup>Optional</sup> <a name="InstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.instanceOptions"></a>

```go
InstanceOptions CoreInstanceInstanceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

instance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_options CoreInstance#instance_options}

---

##### `IpxeScript`<sup>Optional</sup> <a name="IpxeScript" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.ipxeScript"></a>

```go
IpxeScript *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipxe_script CoreInstance#ipxe_script}.

---

##### `IsPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.isPvEncryptionInTransitEnabled"></a>

```go
IsPvEncryptionInTransitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `LaunchOptions`<sup>Optional</sup> <a name="LaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchOptions"></a>

```go
LaunchOptions CoreInstanceLaunchOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

launch_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_options CoreInstance#launch_options}

---

##### `LaunchVolumeAttachments`<sup>Optional</sup> <a name="LaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.launchVolumeAttachments"></a>

```go
LaunchVolumeAttachments interface{}
```

- *Type:* interface{}

launch_volume_attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_volume_attachments CoreInstance#launch_volume_attachments}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#metadata CoreInstance#metadata}.

---

##### `PlatformConfig`<sup>Optional</sup> <a name="PlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.platformConfig"></a>

```go
PlatformConfig CoreInstancePlatformConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

platform_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#platform_config CoreInstance#platform_config}

---

##### `PreemptibleInstanceConfig`<sup>Optional</sup> <a name="PreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preemptibleInstanceConfig"></a>

```go
PreemptibleInstanceConfig CoreInstancePreemptibleInstanceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

preemptible_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemptible_instance_config CoreInstance#preemptible_instance_config}

---

##### `PreserveBootVolume`<sup>Optional</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveBootVolume"></a>

```go
PreserveBootVolume interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

##### `PreserveDataVolumesCreatedAtLaunch`<sup>Optional</sup> <a name="PreserveDataVolumesCreatedAtLaunch" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.preserveDataVolumesCreatedAtLaunch"></a>

```go
PreserveDataVolumesCreatedAtLaunch interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_data_volumes_created_at_launch CoreInstance#preserve_data_volumes_created_at_launch}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.securityAttributes"></a>

```go
SecurityAttributes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape CoreInstance#shape}.

---

##### `ShapeConfig`<sup>Optional</sup> <a name="ShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.shapeConfig"></a>

```go
ShapeConfig CoreInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#shape_config CoreInstance#shape_config}

---

##### `SourceDetails`<sup>Optional</sup> <a name="SourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.sourceDetails"></a>

```go
SourceDetails CoreInstanceSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_details CoreInstance#source_details}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#state CoreInstance#state}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.timeouts"></a>

```go
Timeouts CoreInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts">CoreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#timeouts CoreInstance#timeouts}

---

##### `UpdateOperationConstraint`<sup>Optional</sup> <a name="UpdateOperationConstraint" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceConfig.property.updateOperationConstraint"></a>

```go
UpdateOperationConstraint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update_operation_constraint CoreInstance#update_operation_constraint}.

---

### CoreInstanceCreateVnicDetails <a name="CoreInstanceCreateVnicDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceCreateVnicDetails {
	AssignIpv6Ip: interface{},
	AssignPrivateDnsRecord: interface{},
	AssignPublicIp: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	HostnameLabel: *string,
	Ipv6AddressIpv6SubnetCidrPairDetails: interface{},
	NsgIds: *[]*string,
	PrivateIp: *string,
	SecurityAttributes: *map[string]*string,
	SkipSourceDestCheck: interface{},
	SubnetId: *string,
	VlanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code>interface{}</code> | ipv6address_ipv6subnet_cidr_pair_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId">VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}. |

---

##### `AssignIpv6Ip`<sup>Optional</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignIpv6Ip"></a>

```go
AssignIpv6Ip interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_ipv6ip CoreInstance#assign_ipv6ip}.

---

##### `AssignPrivateDnsRecord`<sup>Optional</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPrivateDnsRecord"></a>

```go
AssignPrivateDnsRecord interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_private_dns_record CoreInstance#assign_private_dns_record}.

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.assignPublicIp"></a>

```go
AssignPublicIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#assign_public_ip CoreInstance#assign_public_ip}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags CoreInstance#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#freeform_tags CoreInstance#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.hostnameLabel"></a>

```go
HostnameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#hostname_label CoreInstance#hostname_label}.

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Optional</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```go
Ipv6AddressIpv6SubnetCidrPairDetails interface{}
```

- *Type:* interface{}

ipv6address_ipv6subnet_cidr_pair_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address_ipv6subnet_cidr_pair_details CoreInstance#ipv6address_ipv6subnet_cidr_pair_details}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nsg_ids CoreInstance#nsg_ids}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#private_ip CoreInstance#private_ip}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.securityAttributes"></a>

```go
SecurityAttributes *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#security_attributes CoreInstance#security_attributes}.

---

##### `SkipSourceDestCheck`<sup>Optional</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.skipSourceDestCheck"></a>

```go
SkipSourceDestCheck interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#skip_source_dest_check CoreInstance#skip_source_dest_check}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#subnet_id CoreInstance#subnet_id}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vlan_id CoreInstance#vlan_id}.

---

### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
	Ipv6Address: *string,
	Ipv6SubnetCidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}. |

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6address CoreInstance#ipv6address}.

---

##### `Ipv6SubnetCidr`<sup>Optional</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails.property.ipv6SubnetCidr"></a>

```go
Ipv6SubnetCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ipv6subnet_cidr CoreInstance#ipv6subnet_cidr}.

---

### CoreInstanceInstanceOptions <a name="CoreInstanceInstanceOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceInstanceOptions {
	AreLegacyImdsEndpointsDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled">AreLegacyImdsEndpointsDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}. |

---

##### `AreLegacyImdsEndpointsDisabled`<sup>Optional</sup> <a name="AreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions.property.areLegacyImdsEndpointsDisabled"></a>

```go
AreLegacyImdsEndpointsDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_legacy_imds_endpoints_disabled CoreInstance#are_legacy_imds_endpoints_disabled}.

---

### CoreInstanceLaunchOptions <a name="CoreInstanceLaunchOptions" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceLaunchOptions {
	BootVolumeType: *string,
	Firmware: *string,
	IsConsistentVolumeNamingEnabled: interface{},
	IsPvEncryptionInTransitEnabled: interface{},
	NetworkType: *string,
	RemoteDataVolumeType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType">BootVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware">Firmware</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled">IsConsistentVolumeNamingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType">NetworkType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType">RemoteDataVolumeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}. |

---

##### `BootVolumeType`<sup>Optional</sup> <a name="BootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.bootVolumeType"></a>

```go
BootVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_type CoreInstance#boot_volume_type}.

---

##### `Firmware`<sup>Optional</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.firmware"></a>

```go
Firmware *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#firmware CoreInstance#firmware}.

---

##### `IsConsistentVolumeNamingEnabled`<sup>Optional</sup> <a name="IsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isConsistentVolumeNamingEnabled"></a>

```go
IsConsistentVolumeNamingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_consistent_volume_naming_enabled CoreInstance#is_consistent_volume_naming_enabled}.

---

##### `IsPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.isPvEncryptionInTransitEnabled"></a>

```go
IsPvEncryptionInTransitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.networkType"></a>

```go
NetworkType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#network_type CoreInstance#network_type}.

---

##### `RemoteDataVolumeType`<sup>Optional</sup> <a name="RemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions.property.remoteDataVolumeType"></a>

```go
RemoteDataVolumeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#remote_data_volume_type CoreInstance#remote_data_volume_type}.

---

### CoreInstanceLaunchVolumeAttachments <a name="CoreInstanceLaunchVolumeAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceLaunchVolumeAttachments {
	Type: *string,
	Device: *string,
	DisplayName: *string,
	EncryptionInTransitType: *string,
	IsAgentAutoIscsiLoginEnabled: interface{},
	IsPvEncryptionInTransitEnabled: interface{},
	IsReadOnly: interface{},
	IsShareable: interface{},
	LaunchCreateVolumeDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails,
	UseChap: interface{},
	VolumeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device">Device</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType">EncryptionInTransitType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled">IsAgentAutoIscsiLoginEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly">IsReadOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable">IsShareable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails">LaunchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | launch_create_volume_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap">UseChap</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId">VolumeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `Device`<sup>Optional</sup> <a name="Device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.device"></a>

```go
Device *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#device CoreInstance#device}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `EncryptionInTransitType`<sup>Optional</sup> <a name="EncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.encryptionInTransitType"></a>

```go
EncryptionInTransitType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#encryption_in_transit_type CoreInstance#encryption_in_transit_type}.

---

##### `IsAgentAutoIscsiLoginEnabled`<sup>Optional</sup> <a name="IsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isAgentAutoIscsiLoginEnabled"></a>

```go
IsAgentAutoIscsiLoginEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_agent_auto_iscsi_login_enabled CoreInstance#is_agent_auto_iscsi_login_enabled}.

---

##### `IsPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isPvEncryptionInTransitEnabled"></a>

```go
IsPvEncryptionInTransitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_pv_encryption_in_transit_enabled CoreInstance#is_pv_encryption_in_transit_enabled}.

---

##### `IsReadOnly`<sup>Optional</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isReadOnly"></a>

```go
IsReadOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_read_only CoreInstance#is_read_only}.

---

##### `IsShareable`<sup>Optional</sup> <a name="IsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.isShareable"></a>

```go
IsShareable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_shareable CoreInstance#is_shareable}.

---

##### `LaunchCreateVolumeDetails`<sup>Optional</sup> <a name="LaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.launchCreateVolumeDetails"></a>

```go
LaunchCreateVolumeDetails CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

launch_create_volume_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#launch_create_volume_details CoreInstance#launch_create_volume_details}

---

##### `UseChap`<sup>Optional</sup> <a name="UseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.useChap"></a>

```go
UseChap interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#use_chap CoreInstance#use_chap}.

---

##### `VolumeId`<sup>Optional</sup> <a name="VolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachments.property.volumeId"></a>

```go
VolumeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_id CoreInstance#volume_id}.

---

### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails {
	SizeInGbs: *string,
	VolumeCreationType: *string,
	CompartmentId: *string,
	DisplayName: *string,
	KmsKeyId: *string,
	VpusPerGb: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs">SizeInGbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType">VolumeCreationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb">VpusPerGb</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}. |

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.sizeInGbs"></a>

```go
SizeInGbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#size_in_gbs CoreInstance#size_in_gbs}.

---

##### `VolumeCreationType`<sup>Required</sup> <a name="VolumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.volumeCreationType"></a>

```go
VolumeCreationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#volume_creation_type CoreInstance#volume_creation_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#display_name CoreInstance#display_name}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `VpusPerGb`<sup>Optional</sup> <a name="VpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails.property.vpusPerGb"></a>

```go
VpusPerGb *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vpus_per_gb CoreInstance#vpus_per_gb}.

---

### CoreInstancePlatformConfig <a name="CoreInstancePlatformConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstancePlatformConfig {
	Type: *string,
	AreVirtualInstructionsEnabled: interface{},
	ConfigMap: *map[string]*string,
	IsAccessControlServiceEnabled: interface{},
	IsInputOutputMemoryManagementUnitEnabled: interface{},
	IsMeasuredBootEnabled: interface{},
	IsMemoryEncryptionEnabled: interface{},
	IsSecureBootEnabled: interface{},
	IsSymmetricMultiThreadingEnabled: interface{},
	IsTrustedPlatformModuleEnabled: interface{},
	NumaNodesPerSocket: *string,
	PercentageOfCoresEnabled: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled">AreVirtualInstructionsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap">ConfigMap</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled">IsAccessControlServiceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled">IsInputOutputMemoryManagementUnitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled">IsMeasuredBootEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled">IsMemoryEncryptionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled">IsSecureBootEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled">IsSymmetricMultiThreadingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled">IsTrustedPlatformModuleEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket">NumaNodesPerSocket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled">PercentageOfCoresEnabled</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `AreVirtualInstructionsEnabled`<sup>Optional</sup> <a name="AreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.areVirtualInstructionsEnabled"></a>

```go
AreVirtualInstructionsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#are_virtual_instructions_enabled CoreInstance#are_virtual_instructions_enabled}.

---

##### `ConfigMap`<sup>Optional</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.configMap"></a>

```go
ConfigMap *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#config_map CoreInstance#config_map}.

---

##### `IsAccessControlServiceEnabled`<sup>Optional</sup> <a name="IsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isAccessControlServiceEnabled"></a>

```go
IsAccessControlServiceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_access_control_service_enabled CoreInstance#is_access_control_service_enabled}.

---

##### `IsInputOutputMemoryManagementUnitEnabled`<sup>Optional</sup> <a name="IsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isInputOutputMemoryManagementUnitEnabled"></a>

```go
IsInputOutputMemoryManagementUnitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_input_output_memory_management_unit_enabled CoreInstance#is_input_output_memory_management_unit_enabled}.

---

##### `IsMeasuredBootEnabled`<sup>Optional</sup> <a name="IsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMeasuredBootEnabled"></a>

```go
IsMeasuredBootEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_measured_boot_enabled CoreInstance#is_measured_boot_enabled}.

---

##### `IsMemoryEncryptionEnabled`<sup>Optional</sup> <a name="IsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isMemoryEncryptionEnabled"></a>

```go
IsMemoryEncryptionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_memory_encryption_enabled CoreInstance#is_memory_encryption_enabled}.

---

##### `IsSecureBootEnabled`<sup>Optional</sup> <a name="IsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSecureBootEnabled"></a>

```go
IsSecureBootEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_secure_boot_enabled CoreInstance#is_secure_boot_enabled}.

---

##### `IsSymmetricMultiThreadingEnabled`<sup>Optional</sup> <a name="IsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isSymmetricMultiThreadingEnabled"></a>

```go
IsSymmetricMultiThreadingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_symmetric_multi_threading_enabled CoreInstance#is_symmetric_multi_threading_enabled}.

---

##### `IsTrustedPlatformModuleEnabled`<sup>Optional</sup> <a name="IsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.isTrustedPlatformModuleEnabled"></a>

```go
IsTrustedPlatformModuleEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_trusted_platform_module_enabled CoreInstance#is_trusted_platform_module_enabled}.

---

##### `NumaNodesPerSocket`<sup>Optional</sup> <a name="NumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.numaNodesPerSocket"></a>

```go
NumaNodesPerSocket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#numa_nodes_per_socket CoreInstance#numa_nodes_per_socket}.

---

##### `PercentageOfCoresEnabled`<sup>Optional</sup> <a name="PercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig.property.percentageOfCoresEnabled"></a>

```go
PercentageOfCoresEnabled *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#percentage_of_cores_enabled CoreInstance#percentage_of_cores_enabled}.

---

### CoreInstancePreemptibleInstanceConfig <a name="CoreInstancePreemptibleInstanceConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstancePreemptibleInstanceConfig {
	PreemptionAction: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig.property.preemptionAction"></a>

```go
PreemptionAction CoreInstancePreemptibleInstanceConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preemption_action CoreInstance#preemption_action}

---

### CoreInstancePreemptibleInstanceConfigPreemptionAction <a name="CoreInstancePreemptibleInstanceConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstancePreemptibleInstanceConfigPreemptionAction {
	Type: *string,
	PreserveBootVolume: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#type CoreInstance#type}.

---

##### `PreserveBootVolume`<sup>Optional</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction.property.preserveBootVolume"></a>

```go
PreserveBootVolume interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#preserve_boot_volume CoreInstance#preserve_boot_volume}.

---

### CoreInstanceShapeConfig <a name="CoreInstanceShapeConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceShapeConfig {
	BaselineOcpuUtilization: *string,
	MemoryInGbs: *f64,
	Nvmes: *f64,
	Ocpus: *f64,
	Vcpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes">Nvmes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus">Vcpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}. |

---

##### `BaselineOcpuUtilization`<sup>Optional</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.baselineOcpuUtilization"></a>

```go
BaselineOcpuUtilization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#baseline_ocpu_utilization CoreInstance#baseline_ocpu_utilization}.

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#memory_in_gbs CoreInstance#memory_in_gbs}.

---

##### `Nvmes`<sup>Optional</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.nvmes"></a>

```go
Nvmes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#nvmes CoreInstance#nvmes}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#ocpus CoreInstance#ocpus}.

---

##### `Vcpus`<sup>Optional</sup> <a name="Vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig.property.vcpus"></a>

```go
Vcpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#vcpus CoreInstance#vcpus}.

---

### CoreInstanceSourceDetails <a name="CoreInstanceSourceDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceSourceDetails {
	SourceType: *string,
	BootVolumeSizeInGbs: *string,
	BootVolumeVpusPerGb: *string,
	InstanceSourceImageFilterDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails,
	IsPreserveBootVolumeEnabled: interface{},
	KmsKeyId: *string,
	SourceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb">BootVolumeVpusPerGb</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails">InstanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | instance_source_image_filter_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled">IsPreserveBootVolumeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId">SourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}. |

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_type CoreInstance#source_type}.

---

##### `BootVolumeSizeInGbs`<sup>Optional</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeSizeInGbs"></a>

```go
BootVolumeSizeInGbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_size_in_gbs CoreInstance#boot_volume_size_in_gbs}.

---

##### `BootVolumeVpusPerGb`<sup>Optional</sup> <a name="BootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.bootVolumeVpusPerGb"></a>

```go
BootVolumeVpusPerGb *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#boot_volume_vpus_per_gb CoreInstance#boot_volume_vpus_per_gb}.

---

##### `InstanceSourceImageFilterDetails`<sup>Optional</sup> <a name="InstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.instanceSourceImageFilterDetails"></a>

```go
InstanceSourceImageFilterDetails CoreInstanceSourceDetailsInstanceSourceImageFilterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

instance_source_image_filter_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#instance_source_image_filter_details CoreInstance#instance_source_image_filter_details}

---

##### `IsPreserveBootVolumeEnabled`<sup>Optional</sup> <a name="IsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.isPreserveBootVolumeEnabled"></a>

```go
IsPreserveBootVolumeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#is_preserve_boot_volume_enabled CoreInstance#is_preserve_boot_volume_enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#kms_key_id CoreInstance#kms_key_id}.

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails.property.sourceId"></a>

```go
SourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#source_id CoreInstance#source_id}.

---

### CoreInstanceSourceDetailsInstanceSourceImageFilterDetails <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails {
	CompartmentId: *string,
	DefinedTagsFilter: *map[string]*string,
	OperatingSystem: *string,
	OperatingSystemVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter">DefinedTagsFilter</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#compartment_id CoreInstance#compartment_id}.

---

##### `DefinedTagsFilter`<sup>Optional</sup> <a name="DefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.definedTagsFilter"></a>

```go
DefinedTagsFilter *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#defined_tags_filter CoreInstance#defined_tags_filter}.

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystem"></a>

```go
OperatingSystem *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system CoreInstance#operating_system}.

---

##### `OperatingSystemVersion`<sup>Optional</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails.property.operatingSystemVersion"></a>

```go
OperatingSystemVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#operating_system_version CoreInstance#operating_system_version}.

---

### CoreInstanceTimeouts <a name="CoreInstanceTimeouts" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

&coreinstance.CoreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#create CoreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#delete CoreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance#update CoreInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceAgentConfigOutputReference <a name="CoreInstanceAgentConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceAgentConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceAgentConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig">PutPluginsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled">ResetAreAllPluginsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled">ResetIsManagementDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled">ResetIsMonitoringDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig">ResetPluginsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPluginsConfig` <a name="PutPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig"></a>

```go
func PutPluginsConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.putPluginsConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAreAllPluginsDisabled` <a name="ResetAreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetAreAllPluginsDisabled"></a>

```go
func ResetAreAllPluginsDisabled()
```

##### `ResetIsManagementDisabled` <a name="ResetIsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsManagementDisabled"></a>

```go
func ResetIsManagementDisabled()
```

##### `ResetIsMonitoringDisabled` <a name="ResetIsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetIsMonitoringDisabled"></a>

```go
func ResetIsMonitoringDisabled()
```

##### `ResetPluginsConfig` <a name="ResetPluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.resetPluginsConfig"></a>

```go
func ResetPluginsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig">PluginsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput">AreAllPluginsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput">IsManagementDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput">IsMonitoringDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput">PluginsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled">AreAllPluginsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled">IsManagementDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled">IsMonitoringDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PluginsConfig`<sup>Required</sup> <a name="PluginsConfig" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfig"></a>

```go
func PluginsConfig() CoreInstanceAgentConfigPluginsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList">CoreInstanceAgentConfigPluginsConfigList</a>

---

##### `AreAllPluginsDisabledInput`<sup>Optional</sup> <a name="AreAllPluginsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabledInput"></a>

```go
func AreAllPluginsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsManagementDisabledInput`<sup>Optional</sup> <a name="IsManagementDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabledInput"></a>

```go
func IsManagementDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsMonitoringDisabledInput`<sup>Optional</sup> <a name="IsMonitoringDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabledInput"></a>

```go
func IsMonitoringDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PluginsConfigInput`<sup>Optional</sup> <a name="PluginsConfigInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.pluginsConfigInput"></a>

```go
func PluginsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AreAllPluginsDisabled`<sup>Required</sup> <a name="AreAllPluginsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.areAllPluginsDisabled"></a>

```go
func AreAllPluginsDisabled() interface{}
```

- *Type:* interface{}

---

##### `IsManagementDisabled`<sup>Required</sup> <a name="IsManagementDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isManagementDisabled"></a>

```go
func IsManagementDisabled() interface{}
```

- *Type:* interface{}

---

##### `IsMonitoringDisabled`<sup>Required</sup> <a name="IsMonitoringDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.isMonitoringDisabled"></a>

```go
func IsMonitoringDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceAgentConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfig">CoreInstanceAgentConfig</a>

---


### CoreInstanceAgentConfigPluginsConfigList <a name="CoreInstanceAgentConfigPluginsConfigList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceAgentConfigPluginsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreInstanceAgentConfigPluginsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get"></a>

```go
func Get(index *f64) CoreInstanceAgentConfigPluginsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreInstanceAgentConfigPluginsConfigOutputReference <a name="CoreInstanceAgentConfigPluginsConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceAgentConfigPluginsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreInstanceAgentConfigPluginsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAgentConfigPluginsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreInstanceAvailabilityConfigOutputReference <a name="CoreInstanceAvailabilityConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceAvailabilityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceAvailabilityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred">ResetIsLiveMigrationPreferred</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction">ResetRecoveryAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsLiveMigrationPreferred` <a name="ResetIsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetIsLiveMigrationPreferred"></a>

```go
func ResetIsLiveMigrationPreferred()
```

##### `ResetRecoveryAction` <a name="ResetRecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.resetRecoveryAction"></a>

```go
func ResetRecoveryAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput">IsLiveMigrationPreferredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput">RecoveryActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred">IsLiveMigrationPreferred</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction">RecoveryAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsLiveMigrationPreferredInput`<sup>Optional</sup> <a name="IsLiveMigrationPreferredInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferredInput"></a>

```go
func IsLiveMigrationPreferredInput() interface{}
```

- *Type:* interface{}

---

##### `RecoveryActionInput`<sup>Optional</sup> <a name="RecoveryActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryActionInput"></a>

```go
func RecoveryActionInput() *string
```

- *Type:* *string

---

##### `IsLiveMigrationPreferred`<sup>Required</sup> <a name="IsLiveMigrationPreferred" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.isLiveMigrationPreferred"></a>

```go
func IsLiveMigrationPreferred() interface{}
```

- *Type:* interface{}

---

##### `RecoveryAction`<sup>Required</sup> <a name="RecoveryAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.recoveryAction"></a>

```go
func RecoveryAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceAvailabilityConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceAvailabilityConfig">CoreInstanceAvailabilityConfig</a>

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```go
func Get(index *f64) CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr">ResetIpv6SubnetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetIpv6SubnetCidr` <a name="ResetIpv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resetIpv6SubnetCidr"></a>

```go
func ResetIpv6SubnetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput">Ipv6SubnetCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">Ipv6SubnetCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `Ipv6SubnetCidrInput`<sup>Optional</sup> <a name="Ipv6SubnetCidrInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidrInput"></a>

```go
func Ipv6SubnetCidrInput() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Ipv6SubnetCidr`<sup>Required</sup> <a name="Ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```go
func Ipv6SubnetCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreInstanceCreateVnicDetailsOutputReference <a name="CoreInstanceCreateVnicDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceCreateVnicDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceCreateVnicDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails">PutIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip">ResetAssignIpv6Ip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord">ResetAssignPrivateDnsRecord</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails">ResetIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck">ResetSkipSourceDestCheck</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv6AddressIpv6SubnetCidrPairDetails` <a name="PutIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails"></a>

```go
func PutIpv6AddressIpv6SubnetCidrPairDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.putIpv6AddressIpv6SubnetCidrPairDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssignIpv6Ip` <a name="ResetAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignIpv6Ip"></a>

```go
func ResetAssignIpv6Ip()
```

##### `ResetAssignPrivateDnsRecord` <a name="ResetAssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPrivateDnsRecord"></a>

```go
func ResetAssignPrivateDnsRecord()
```

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetAssignPublicIp"></a>

```go
func ResetAssignPublicIp()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetHostnameLabel"></a>

```go
func ResetHostnameLabel()
```

##### `ResetIpv6AddressIpv6SubnetCidrPairDetails` <a name="ResetIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetIpv6AddressIpv6SubnetCidrPairDetails"></a>

```go
func ResetIpv6AddressIpv6SubnetCidrPairDetails()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSecurityAttributes"></a>

```go
func ResetSecurityAttributes()
```

##### `ResetSkipSourceDestCheck` <a name="ResetSkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSkipSourceDestCheck"></a>

```go
func ResetSkipSourceDestCheck()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.resetVlanId"></a>

```go
func ResetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">Ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput">AssignIpv6IpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput">AssignPrivateDnsRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput">Ipv6AddressIpv6SubnetCidrPairDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput">SkipSourceDestCheckInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip">AssignIpv6Ip</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord">AssignPrivateDnsRecord</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes">SecurityAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck">SkipSourceDestCheck</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```go
func Ipv6AddressIpv6SubnetCidrPairDetails() CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList">CoreInstanceCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `AssignIpv6IpInput`<sup>Optional</sup> <a name="AssignIpv6IpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6IpInput"></a>

```go
func AssignIpv6IpInput() interface{}
```

- *Type:* interface{}

---

##### `AssignPrivateDnsRecordInput`<sup>Optional</sup> <a name="AssignPrivateDnsRecordInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecordInput"></a>

```go
func AssignPrivateDnsRecordInput() interface{}
```

- *Type:* interface{}

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIpInput"></a>

```go
func AssignPublicIpInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabelInput"></a>

```go
func HostnameLabelInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressIpv6SubnetCidrPairDetailsInput`<sup>Optional</sup> <a name="Ipv6AddressIpv6SubnetCidrPairDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetailsInput"></a>

```go
func Ipv6AddressIpv6SubnetCidrPairDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributesInput"></a>

```go
func SecurityAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SkipSourceDestCheckInput`<sup>Optional</sup> <a name="SkipSourceDestCheckInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheckInput"></a>

```go
func SkipSourceDestCheckInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `AssignIpv6Ip`<sup>Required</sup> <a name="AssignIpv6Ip" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignIpv6Ip"></a>

```go
func AssignIpv6Ip() interface{}
```

- *Type:* interface{}

---

##### `AssignPrivateDnsRecord`<sup>Required</sup> <a name="AssignPrivateDnsRecord" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPrivateDnsRecord"></a>

```go
func AssignPrivateDnsRecord() interface{}
```

- *Type:* interface{}

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.assignPublicIp"></a>

```go
func AssignPublicIp() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.securityAttributes"></a>

```go
func SecurityAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SkipSourceDestCheck`<sup>Required</sup> <a name="SkipSourceDestCheck" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.skipSourceDestCheck"></a>

```go
func SkipSourceDestCheck() interface{}
```

- *Type:* interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceCreateVnicDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceCreateVnicDetails">CoreInstanceCreateVnicDetails</a>

---


### CoreInstanceInstanceOptionsOutputReference <a name="CoreInstanceInstanceOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceInstanceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceInstanceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled">ResetAreLegacyImdsEndpointsDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAreLegacyImdsEndpointsDisabled` <a name="ResetAreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.resetAreLegacyImdsEndpointsDisabled"></a>

```go
func ResetAreLegacyImdsEndpointsDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput">AreLegacyImdsEndpointsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled">AreLegacyImdsEndpointsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreLegacyImdsEndpointsDisabledInput`<sup>Optional</sup> <a name="AreLegacyImdsEndpointsDisabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabledInput"></a>

```go
func AreLegacyImdsEndpointsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `AreLegacyImdsEndpointsDisabled`<sup>Required</sup> <a name="AreLegacyImdsEndpointsDisabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.areLegacyImdsEndpointsDisabled"></a>

```go
func AreLegacyImdsEndpointsDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceInstanceOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceInstanceOptions">CoreInstanceInstanceOptions</a>

---


### CoreInstanceLaunchOptionsOutputReference <a name="CoreInstanceLaunchOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceLaunchOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceLaunchOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType">ResetBootVolumeType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware">ResetFirmware</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled">ResetIsConsistentVolumeNamingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled">ResetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType">ResetRemoteDataVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootVolumeType` <a name="ResetBootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetBootVolumeType"></a>

```go
func ResetBootVolumeType()
```

##### `ResetFirmware` <a name="ResetFirmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetFirmware"></a>

```go
func ResetFirmware()
```

##### `ResetIsConsistentVolumeNamingEnabled` <a name="ResetIsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsConsistentVolumeNamingEnabled"></a>

```go
func ResetIsConsistentVolumeNamingEnabled()
```

##### `ResetIsPvEncryptionInTransitEnabled` <a name="ResetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```go
func ResetIsPvEncryptionInTransitEnabled()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetNetworkType"></a>

```go
func ResetNetworkType()
```

##### `ResetRemoteDataVolumeType` <a name="ResetRemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.resetRemoteDataVolumeType"></a>

```go
func ResetRemoteDataVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput">BootVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput">FirmwareInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput">IsConsistentVolumeNamingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput">IsPvEncryptionInTransitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput">RemoteDataVolumeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType">BootVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware">Firmware</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled">IsConsistentVolumeNamingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType">NetworkType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType">RemoteDataVolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootVolumeTypeInput`<sup>Optional</sup> <a name="BootVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeTypeInput"></a>

```go
func BootVolumeTypeInput() *string
```

- *Type:* *string

---

##### `FirmwareInput`<sup>Optional</sup> <a name="FirmwareInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmwareInput"></a>

```go
func FirmwareInput() *string
```

- *Type:* *string

---

##### `IsConsistentVolumeNamingEnabledInput`<sup>Optional</sup> <a name="IsConsistentVolumeNamingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabledInput"></a>

```go
func IsConsistentVolumeNamingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```go
func IsPvEncryptionInTransitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkTypeInput"></a>

```go
func NetworkTypeInput() *string
```

- *Type:* *string

---

##### `RemoteDataVolumeTypeInput`<sup>Optional</sup> <a name="RemoteDataVolumeTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeTypeInput"></a>

```go
func RemoteDataVolumeTypeInput() *string
```

- *Type:* *string

---

##### `BootVolumeType`<sup>Required</sup> <a name="BootVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.bootVolumeType"></a>

```go
func BootVolumeType() *string
```

- *Type:* *string

---

##### `Firmware`<sup>Required</sup> <a name="Firmware" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.firmware"></a>

```go
func Firmware() *string
```

- *Type:* *string

---

##### `IsConsistentVolumeNamingEnabled`<sup>Required</sup> <a name="IsConsistentVolumeNamingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isConsistentVolumeNamingEnabled"></a>

```go
func IsConsistentVolumeNamingEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() interface{}
```

- *Type:* interface{}

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.networkType"></a>

```go
func NetworkType() *string
```

- *Type:* *string

---

##### `RemoteDataVolumeType`<sup>Required</sup> <a name="RemoteDataVolumeType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.remoteDataVolumeType"></a>

```go
func RemoteDataVolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceLaunchOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchOptions">CoreInstanceLaunchOptions</a>

---


### CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb">ResetVpusPerGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetVpusPerGb` <a name="ResetVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.resetVpusPerGb"></a>

```go
func ResetVpusPerGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput">SizeInGbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput">VolumeCreationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput">VpusPerGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs">SizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType">VolumeCreationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb">VpusPerGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SizeInGbsInput`<sup>Optional</sup> <a name="SizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbsInput"></a>

```go
func SizeInGbsInput() *string
```

- *Type:* *string

---

##### `VolumeCreationTypeInput`<sup>Optional</sup> <a name="VolumeCreationTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationTypeInput"></a>

```go
func VolumeCreationTypeInput() *string
```

- *Type:* *string

---

##### `VpusPerGbInput`<sup>Optional</sup> <a name="VpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGbInput"></a>

```go
func VpusPerGbInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SizeInGbs`<sup>Required</sup> <a name="SizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.sizeInGbs"></a>

```go
func SizeInGbs() *string
```

- *Type:* *string

---

##### `VolumeCreationType`<sup>Required</sup> <a name="VolumeCreationType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.volumeCreationType"></a>

```go
func VolumeCreationType() *string
```

- *Type:* *string

---

##### `VpusPerGb`<sup>Required</sup> <a name="VpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.vpusPerGb"></a>

```go
func VpusPerGb() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---


### CoreInstanceLaunchVolumeAttachmentsList <a name="CoreInstanceLaunchVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceLaunchVolumeAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreInstanceLaunchVolumeAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get"></a>

```go
func Get(index *f64) CoreInstanceLaunchVolumeAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreInstanceLaunchVolumeAttachmentsOutputReference <a name="CoreInstanceLaunchVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceLaunchVolumeAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreInstanceLaunchVolumeAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails">PutLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice">ResetDevice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType">ResetEncryptionInTransitType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled">ResetIsAgentAutoIscsiLoginEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled">ResetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly">ResetIsReadOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable">ResetIsShareable</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails">ResetLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap">ResetUseChap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId">ResetVolumeId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLaunchCreateVolumeDetails` <a name="PutLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails"></a>

```go
func PutLaunchCreateVolumeDetails(value CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.putLaunchCreateVolumeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `ResetDevice` <a name="ResetDevice" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDevice"></a>

```go
func ResetDevice()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionInTransitType` <a name="ResetEncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetEncryptionInTransitType"></a>

```go
func ResetEncryptionInTransitType()
```

##### `ResetIsAgentAutoIscsiLoginEnabled` <a name="ResetIsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsAgentAutoIscsiLoginEnabled"></a>

```go
func ResetIsAgentAutoIscsiLoginEnabled()
```

##### `ResetIsPvEncryptionInTransitEnabled` <a name="ResetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```go
func ResetIsPvEncryptionInTransitEnabled()
```

##### `ResetIsReadOnly` <a name="ResetIsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsReadOnly"></a>

```go
func ResetIsReadOnly()
```

##### `ResetIsShareable` <a name="ResetIsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetIsShareable"></a>

```go
func ResetIsShareable()
```

##### `ResetLaunchCreateVolumeDetails` <a name="ResetLaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetLaunchCreateVolumeDetails"></a>

```go
func ResetLaunchCreateVolumeDetails()
```

##### `ResetUseChap` <a name="ResetUseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetUseChap"></a>

```go
func ResetUseChap()
```

##### `ResetVolumeId` <a name="ResetVolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.resetVolumeId"></a>

```go
func ResetVolumeId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails">LaunchCreateVolumeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput">DeviceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput">EncryptionInTransitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput">IsAgentAutoIscsiLoginEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput">IsPvEncryptionInTransitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput">IsReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput">IsShareableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput">LaunchCreateVolumeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput">UseChapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput">VolumeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device">Device</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType">EncryptionInTransitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">IsAgentAutoIscsiLoginEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly">IsReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable">IsShareable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap">UseChap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId">VolumeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchCreateVolumeDetails`<sup>Required</sup> <a name="LaunchCreateVolumeDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetails"></a>

```go
func LaunchCreateVolumeDetails() CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetailsOutputReference</a>

---

##### `DeviceInput`<sup>Optional</sup> <a name="DeviceInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.deviceInput"></a>

```go
func DeviceInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionInTransitTypeInput`<sup>Optional</sup> <a name="EncryptionInTransitTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitTypeInput"></a>

```go
func EncryptionInTransitTypeInput() *string
```

- *Type:* *string

---

##### `IsAgentAutoIscsiLoginEnabledInput`<sup>Optional</sup> <a name="IsAgentAutoIscsiLoginEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabledInput"></a>

```go
func IsAgentAutoIscsiLoginEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```go
func IsPvEncryptionInTransitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsReadOnlyInput`<sup>Optional</sup> <a name="IsReadOnlyInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnlyInput"></a>

```go
func IsReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IsShareableInput`<sup>Optional</sup> <a name="IsShareableInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareableInput"></a>

```go
func IsShareableInput() interface{}
```

- *Type:* interface{}

---

##### `LaunchCreateVolumeDetailsInput`<sup>Optional</sup> <a name="LaunchCreateVolumeDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.launchCreateVolumeDetailsInput"></a>

```go
func LaunchCreateVolumeDetailsInput() CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails">CoreInstanceLaunchVolumeAttachmentsLaunchCreateVolumeDetails</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UseChapInput`<sup>Optional</sup> <a name="UseChapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChapInput"></a>

```go
func UseChapInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeIdInput`<sup>Optional</sup> <a name="VolumeIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeIdInput"></a>

```go
func VolumeIdInput() *string
```

- *Type:* *string

---

##### `Device`<sup>Required</sup> <a name="Device" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.device"></a>

```go
func Device() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EncryptionInTransitType`<sup>Required</sup> <a name="EncryptionInTransitType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```go
func EncryptionInTransitType() *string
```

- *Type:* *string

---

##### `IsAgentAutoIscsiLoginEnabled`<sup>Required</sup> <a name="IsAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```go
func IsAgentAutoIscsiLoginEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsReadOnly`<sup>Required</sup> <a name="IsReadOnly" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```go
func IsReadOnly() interface{}
```

- *Type:* interface{}

---

##### `IsShareable`<sup>Required</sup> <a name="IsShareable" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.isShareable"></a>

```go
func IsShareable() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UseChap`<sup>Required</sup> <a name="UseChap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.useChap"></a>

```go
func UseChap() interface{}
```

- *Type:* interface{}

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.volumeId"></a>

```go
func VolumeId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceLaunchVolumeAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreInstancePlatformConfigOutputReference <a name="CoreInstancePlatformConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstancePlatformConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstancePlatformConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled">ResetAreVirtualInstructionsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap">ResetConfigMap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled">ResetIsAccessControlServiceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled">ResetIsInputOutputMemoryManagementUnitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled">ResetIsMeasuredBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled">ResetIsMemoryEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled">ResetIsSecureBootEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled">ResetIsSymmetricMultiThreadingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled">ResetIsTrustedPlatformModuleEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket">ResetNumaNodesPerSocket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled">ResetPercentageOfCoresEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAreVirtualInstructionsEnabled` <a name="ResetAreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetAreVirtualInstructionsEnabled"></a>

```go
func ResetAreVirtualInstructionsEnabled()
```

##### `ResetConfigMap` <a name="ResetConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetConfigMap"></a>

```go
func ResetConfigMap()
```

##### `ResetIsAccessControlServiceEnabled` <a name="ResetIsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsAccessControlServiceEnabled"></a>

```go
func ResetIsAccessControlServiceEnabled()
```

##### `ResetIsInputOutputMemoryManagementUnitEnabled` <a name="ResetIsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsInputOutputMemoryManagementUnitEnabled"></a>

```go
func ResetIsInputOutputMemoryManagementUnitEnabled()
```

##### `ResetIsMeasuredBootEnabled` <a name="ResetIsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMeasuredBootEnabled"></a>

```go
func ResetIsMeasuredBootEnabled()
```

##### `ResetIsMemoryEncryptionEnabled` <a name="ResetIsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsMemoryEncryptionEnabled"></a>

```go
func ResetIsMemoryEncryptionEnabled()
```

##### `ResetIsSecureBootEnabled` <a name="ResetIsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSecureBootEnabled"></a>

```go
func ResetIsSecureBootEnabled()
```

##### `ResetIsSymmetricMultiThreadingEnabled` <a name="ResetIsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsSymmetricMultiThreadingEnabled"></a>

```go
func ResetIsSymmetricMultiThreadingEnabled()
```

##### `ResetIsTrustedPlatformModuleEnabled` <a name="ResetIsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetIsTrustedPlatformModuleEnabled"></a>

```go
func ResetIsTrustedPlatformModuleEnabled()
```

##### `ResetNumaNodesPerSocket` <a name="ResetNumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetNumaNodesPerSocket"></a>

```go
func ResetNumaNodesPerSocket()
```

##### `ResetPercentageOfCoresEnabled` <a name="ResetPercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.resetPercentageOfCoresEnabled"></a>

```go
func ResetPercentageOfCoresEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput">AreVirtualInstructionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput">ConfigMapInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput">IsAccessControlServiceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput">IsInputOutputMemoryManagementUnitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput">IsMeasuredBootEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput">IsMemoryEncryptionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput">IsSecureBootEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput">IsSymmetricMultiThreadingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput">IsTrustedPlatformModuleEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput">NumaNodesPerSocketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput">PercentageOfCoresEnabledInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled">AreVirtualInstructionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap">ConfigMap</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled">IsAccessControlServiceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled">IsInputOutputMemoryManagementUnitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled">IsMeasuredBootEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled">IsMemoryEncryptionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled">IsSecureBootEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled">IsSymmetricMultiThreadingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled">IsTrustedPlatformModuleEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket">NumaNodesPerSocket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled">PercentageOfCoresEnabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AreVirtualInstructionsEnabledInput`<sup>Optional</sup> <a name="AreVirtualInstructionsEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabledInput"></a>

```go
func AreVirtualInstructionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigMapInput`<sup>Optional</sup> <a name="ConfigMapInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMapInput"></a>

```go
func ConfigMapInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IsAccessControlServiceEnabledInput`<sup>Optional</sup> <a name="IsAccessControlServiceEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabledInput"></a>

```go
func IsAccessControlServiceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsInputOutputMemoryManagementUnitEnabledInput`<sup>Optional</sup> <a name="IsInputOutputMemoryManagementUnitEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabledInput"></a>

```go
func IsInputOutputMemoryManagementUnitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsMeasuredBootEnabledInput`<sup>Optional</sup> <a name="IsMeasuredBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabledInput"></a>

```go
func IsMeasuredBootEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsMemoryEncryptionEnabledInput`<sup>Optional</sup> <a name="IsMemoryEncryptionEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabledInput"></a>

```go
func IsMemoryEncryptionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsSecureBootEnabledInput`<sup>Optional</sup> <a name="IsSecureBootEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabledInput"></a>

```go
func IsSecureBootEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsSymmetricMultiThreadingEnabledInput`<sup>Optional</sup> <a name="IsSymmetricMultiThreadingEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabledInput"></a>

```go
func IsSymmetricMultiThreadingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedPlatformModuleEnabledInput`<sup>Optional</sup> <a name="IsTrustedPlatformModuleEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabledInput"></a>

```go
func IsTrustedPlatformModuleEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NumaNodesPerSocketInput`<sup>Optional</sup> <a name="NumaNodesPerSocketInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocketInput"></a>

```go
func NumaNodesPerSocketInput() *string
```

- *Type:* *string

---

##### `PercentageOfCoresEnabledInput`<sup>Optional</sup> <a name="PercentageOfCoresEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabledInput"></a>

```go
func PercentageOfCoresEnabledInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AreVirtualInstructionsEnabled`<sup>Required</sup> <a name="AreVirtualInstructionsEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.areVirtualInstructionsEnabled"></a>

```go
func AreVirtualInstructionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `ConfigMap`<sup>Required</sup> <a name="ConfigMap" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.configMap"></a>

```go
func ConfigMap() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IsAccessControlServiceEnabled`<sup>Required</sup> <a name="IsAccessControlServiceEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isAccessControlServiceEnabled"></a>

```go
func IsAccessControlServiceEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsInputOutputMemoryManagementUnitEnabled`<sup>Required</sup> <a name="IsInputOutputMemoryManagementUnitEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isInputOutputMemoryManagementUnitEnabled"></a>

```go
func IsInputOutputMemoryManagementUnitEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsMeasuredBootEnabled`<sup>Required</sup> <a name="IsMeasuredBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMeasuredBootEnabled"></a>

```go
func IsMeasuredBootEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsMemoryEncryptionEnabled`<sup>Required</sup> <a name="IsMemoryEncryptionEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isMemoryEncryptionEnabled"></a>

```go
func IsMemoryEncryptionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsSecureBootEnabled`<sup>Required</sup> <a name="IsSecureBootEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSecureBootEnabled"></a>

```go
func IsSecureBootEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsSymmetricMultiThreadingEnabled`<sup>Required</sup> <a name="IsSymmetricMultiThreadingEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isSymmetricMultiThreadingEnabled"></a>

```go
func IsSymmetricMultiThreadingEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsTrustedPlatformModuleEnabled`<sup>Required</sup> <a name="IsTrustedPlatformModuleEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.isTrustedPlatformModuleEnabled"></a>

```go
func IsTrustedPlatformModuleEnabled() interface{}
```

- *Type:* interface{}

---

##### `NumaNodesPerSocket`<sup>Required</sup> <a name="NumaNodesPerSocket" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.numaNodesPerSocket"></a>

```go
func NumaNodesPerSocket() *string
```

- *Type:* *string

---

##### `PercentageOfCoresEnabled`<sup>Required</sup> <a name="PercentageOfCoresEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.percentageOfCoresEnabled"></a>

```go
func PercentageOfCoresEnabled() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstancePlatformConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePlatformConfig">CoreInstancePlatformConfig</a>

---


### CoreInstancePreemptibleInstanceConfigOutputReference <a name="CoreInstancePreemptibleInstanceConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstancePreemptibleInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstancePreemptibleInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction">PutPreemptionAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreemptionAction` <a name="PutPreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction"></a>

```go
func PutPreemptionAction(value CoreInstancePreemptibleInstanceConfigPreemptionAction)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.putPreemptionAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput">PreemptionActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionAction"></a>

```go
func PreemptionAction() CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference">CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference</a>

---

##### `PreemptionActionInput`<sup>Optional</sup> <a name="PreemptionActionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.preemptionActionInput"></a>

```go
func PreemptionActionInput() CoreInstancePreemptibleInstanceConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstancePreemptibleInstanceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfig">CoreInstancePreemptibleInstanceConfig</a>

---


### CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference <a name="CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume">ResetPreserveBootVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveBootVolume` <a name="ResetPreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.resetPreserveBootVolume"></a>

```go
func ResetPreserveBootVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput">PreserveBootVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume">PreserveBootVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreserveBootVolumeInput`<sup>Optional</sup> <a name="PreserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolumeInput"></a>

```go
func PreserveBootVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `PreserveBootVolume`<sup>Required</sup> <a name="PreserveBootVolume" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.preserveBootVolume"></a>

```go
func PreserveBootVolume() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstancePreemptibleInstanceConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstancePreemptibleInstanceConfigPreemptionAction">CoreInstancePreemptibleInstanceConfigPreemptionAction</a>

---


### CoreInstanceShapeConfigOutputReference <a name="CoreInstanceShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization">ResetBaselineOcpuUtilization</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes">ResetNvmes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus">ResetVcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaselineOcpuUtilization` <a name="ResetBaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetBaselineOcpuUtilization"></a>

```go
func ResetBaselineOcpuUtilization()
```

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetNvmes` <a name="ResetNvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetNvmes"></a>

```go
func ResetNvmes()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```

##### `ResetVcpus` <a name="ResetVcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.resetVcpus"></a>

```go
func ResetVcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription">GpuDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus">Gpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription">LocalDiskDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks">LocalDisks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs">LocalDisksTotalSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments">MaxVnicAttachments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps">NetworkingBandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription">ProcessorDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput">BaselineOcpuUtilizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput">NvmesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput">VcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization">BaselineOcpuUtilization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes">Nvmes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus">Vcpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GpuDescription`<sup>Required</sup> <a name="GpuDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpuDescription"></a>

```go
func GpuDescription() *string
```

- *Type:* *string

---

##### `Gpus`<sup>Required</sup> <a name="Gpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.gpus"></a>

```go
func Gpus() *f64
```

- *Type:* *f64

---

##### `LocalDiskDescription`<sup>Required</sup> <a name="LocalDiskDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDiskDescription"></a>

```go
func LocalDiskDescription() *string
```

- *Type:* *string

---

##### `LocalDisks`<sup>Required</sup> <a name="LocalDisks" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisks"></a>

```go
func LocalDisks() *f64
```

- *Type:* *f64

---

##### `LocalDisksTotalSizeInGbs`<sup>Required</sup> <a name="LocalDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.localDisksTotalSizeInGbs"></a>

```go
func LocalDisksTotalSizeInGbs() *f64
```

- *Type:* *f64

---

##### `MaxVnicAttachments`<sup>Required</sup> <a name="MaxVnicAttachments" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.maxVnicAttachments"></a>

```go
func MaxVnicAttachments() *f64
```

- *Type:* *f64

---

##### `NetworkingBandwidthInGbps`<sup>Required</sup> <a name="NetworkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.networkingBandwidthInGbps"></a>

```go
func NetworkingBandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `ProcessorDescription`<sup>Required</sup> <a name="ProcessorDescription" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.processorDescription"></a>

```go
func ProcessorDescription() *string
```

- *Type:* *string

---

##### `BaselineOcpuUtilizationInput`<sup>Optional</sup> <a name="BaselineOcpuUtilizationInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilizationInput"></a>

```go
func BaselineOcpuUtilizationInput() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `NvmesInput`<sup>Optional</sup> <a name="NvmesInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmesInput"></a>

```go
func NvmesInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `VcpusInput`<sup>Optional</sup> <a name="VcpusInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpusInput"></a>

```go
func VcpusInput() *f64
```

- *Type:* *f64

---

##### `BaselineOcpuUtilization`<sup>Required</sup> <a name="BaselineOcpuUtilization" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```go
func BaselineOcpuUtilization() *string
```

- *Type:* *string

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Nvmes`<sup>Required</sup> <a name="Nvmes" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.nvmes"></a>

```go
func Nvmes() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `Vcpus`<sup>Required</sup> <a name="Vcpus" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.vcpus"></a>

```go
func Vcpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceShapeConfig">CoreInstanceShapeConfig</a>

---


### CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference <a name="CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter">ResetDefinedTagsFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion">ResetOperatingSystemVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinedTagsFilter` <a name="ResetDefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetDefinedTagsFilter"></a>

```go
func ResetDefinedTagsFilter()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystem"></a>

```go
func ResetOperatingSystem()
```

##### `ResetOperatingSystemVersion` <a name="ResetOperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.resetOperatingSystemVersion"></a>

```go
func ResetOperatingSystemVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput">DefinedTagsFilterInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput">OperatingSystemVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter">DefinedTagsFilter</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion">OperatingSystemVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsFilterInput`<sup>Optional</sup> <a name="DefinedTagsFilterInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilterInput"></a>

```go
func DefinedTagsFilterInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() *string
```

- *Type:* *string

---

##### `OperatingSystemVersionInput`<sup>Optional</sup> <a name="OperatingSystemVersionInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersionInput"></a>

```go
func OperatingSystemVersionInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTagsFilter`<sup>Required</sup> <a name="DefinedTagsFilter" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.definedTagsFilter"></a>

```go
func DefinedTagsFilter() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() *string
```

- *Type:* *string

---

##### `OperatingSystemVersion`<sup>Required</sup> <a name="OperatingSystemVersion" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.operatingSystemVersion"></a>

```go
func OperatingSystemVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceSourceDetailsInstanceSourceImageFilterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---


### CoreInstanceSourceDetailsOutputReference <a name="CoreInstanceSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails">PutInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs">ResetBootVolumeSizeInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb">ResetBootVolumeVpusPerGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails">ResetInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled">ResetIsPreserveBootVolumeEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId">ResetSourceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceSourceImageFilterDetails` <a name="PutInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails"></a>

```go
func PutInstanceSourceImageFilterDetails(value CoreInstanceSourceDetailsInstanceSourceImageFilterDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.putInstanceSourceImageFilterDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `ResetBootVolumeSizeInGbs` <a name="ResetBootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```go
func ResetBootVolumeSizeInGbs()
```

##### `ResetBootVolumeVpusPerGb` <a name="ResetBootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetBootVolumeVpusPerGb"></a>

```go
func ResetBootVolumeVpusPerGb()
```

##### `ResetInstanceSourceImageFilterDetails` <a name="ResetInstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetInstanceSourceImageFilterDetails"></a>

```go
func ResetInstanceSourceImageFilterDetails()
```

##### `ResetIsPreserveBootVolumeEnabled` <a name="ResetIsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetIsPreserveBootVolumeEnabled"></a>

```go
func ResetIsPreserveBootVolumeEnabled()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSourceId` <a name="ResetSourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.resetSourceId"></a>

```go
func ResetSourceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails">InstanceSourceImageFilterDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">BootVolumeSizeInGbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput">BootVolumeVpusPerGbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput">InstanceSourceImageFilterDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput">IsPreserveBootVolumeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb">BootVolumeVpusPerGb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled">IsPreserveBootVolumeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId">SourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceSourceImageFilterDetails`<sup>Required</sup> <a name="InstanceSourceImageFilterDetails" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetails"></a>

```go
func InstanceSourceImageFilterDetails() CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference">CoreInstanceSourceDetailsInstanceSourceImageFilterDetailsOutputReference</a>

---

##### `BootVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BootVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```go
func BootVolumeSizeInGbsInput() *string
```

- *Type:* *string

---

##### `BootVolumeVpusPerGbInput`<sup>Optional</sup> <a name="BootVolumeVpusPerGbInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGbInput"></a>

```go
func BootVolumeVpusPerGbInput() *string
```

- *Type:* *string

---

##### `InstanceSourceImageFilterDetailsInput`<sup>Optional</sup> <a name="InstanceSourceImageFilterDetailsInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.instanceSourceImageFilterDetailsInput"></a>

```go
func InstanceSourceImageFilterDetailsInput() CoreInstanceSourceDetailsInstanceSourceImageFilterDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsInstanceSourceImageFilterDetails">CoreInstanceSourceDetailsInstanceSourceImageFilterDetails</a>

---

##### `IsPreserveBootVolumeEnabledInput`<sup>Optional</sup> <a name="IsPreserveBootVolumeEnabledInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabledInput"></a>

```go
func IsPreserveBootVolumeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceIdInput"></a>

```go
func SourceIdInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `BootVolumeSizeInGbs`<sup>Required</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```go
func BootVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `BootVolumeVpusPerGb`<sup>Required</sup> <a name="BootVolumeVpusPerGb" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.bootVolumeVpusPerGb"></a>

```go
func BootVolumeVpusPerGb() *string
```

- *Type:* *string

---

##### `IsPreserveBootVolumeEnabled`<sup>Required</sup> <a name="IsPreserveBootVolumeEnabled" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.isPreserveBootVolumeEnabled"></a>

```go
func IsPreserveBootVolumeEnabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceId"></a>

```go
func SourceId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreInstanceSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceSourceDetails">CoreInstanceSourceDetails</a>

---


### CoreInstanceTimeoutsOutputReference <a name="CoreInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstance"

coreinstance.NewCoreInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstance.CoreInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



