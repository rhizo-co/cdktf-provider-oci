# `fleetAppsManagementFleet` Submodule <a name="`fleetAppsManagementFleet` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementFleet <a name="FleetAppsManagementFleet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet oci_fleet_apps_management_fleet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleet(scope Construct, id *string, config FleetAppsManagementFleetConfig) FleetAppsManagementFleet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig">FleetAppsManagementFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig">FleetAppsManagementFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences">PutNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria">PutRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetEnvironmentType">ResetEnvironmentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetGroupType">ResetGroupType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetIsTargetAutoConfirm">ResetIsTargetAutoConfirm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetNotificationPreferences">ResetNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetProducts">ResetProducts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetResourceSelectionType">ResetResourceSelectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetRuleSelectionCriteria">ResetRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationPreferences` <a name="PutNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences"></a>

```go
func PutNotificationPreferences(value FleetAppsManagementFleetNotificationPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putNotificationPreferences.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---

##### `PutRuleSelectionCriteria` <a name="PutRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria"></a>

```go
func PutRuleSelectionCriteria(value FleetAppsManagementFleetRuleSelectionCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putRuleSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts"></a>

```go
func PutTimeouts(value FleetAppsManagementFleetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

---

##### `ResetApplicationType` <a name="ResetApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetApplicationType"></a>

```go
func ResetApplicationType()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnvironmentType` <a name="ResetEnvironmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetEnvironmentType"></a>

```go
func ResetEnvironmentType()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetGroupType` <a name="ResetGroupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetGroupType"></a>

```go
func ResetGroupType()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetId"></a>

```go
func ResetId()
```

##### `ResetIsTargetAutoConfirm` <a name="ResetIsTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetIsTargetAutoConfirm"></a>

```go
func ResetIsTargetAutoConfirm()
```

##### `ResetNotificationPreferences` <a name="ResetNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetNotificationPreferences"></a>

```go
func ResetNotificationPreferences()
```

##### `ResetProducts` <a name="ResetProducts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetProducts"></a>

```go
func ResetProducts()
```

##### `ResetResourceSelectionType` <a name="ResetResourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetResourceSelectionType"></a>

```go
func ResetResourceSelectionType()
```

##### `ResetRuleSelectionCriteria` <a name="ResetRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetRuleSelectionCriteria"></a>

```go
func ResetRuleSelectionCriteria()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.FleetAppsManagementFleet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.FleetAppsManagementFleet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.FleetAppsManagementFleet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.FleetAppsManagementFleet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FleetAppsManagementFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FleetAppsManagementFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FleetAppsManagementFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferences">NotificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteria">RuleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference">FleetAppsManagementFleetRuleSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference">FleetAppsManagementFleetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentTypeInput">EnvironmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetTypeInput">FleetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupTypeInput">GroupTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirmInput">IsTargetAutoConfirmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferencesInput">NotificationPreferencesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.productsInput">ProductsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionTypeInput">ResourceSelectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteriaInput">RuleSelectionCriteriaInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentType">EnvironmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetType">FleetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupType">GroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirm">IsTargetAutoConfirm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionType">ResourceSelectionType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NotificationPreferences`<sup>Required</sup> <a name="NotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferences"></a>

```go
func NotificationPreferences() FleetAppsManagementFleetNotificationPreferencesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesOutputReference</a>

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `RuleSelectionCriteria`<sup>Required</sup> <a name="RuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteria"></a>

```go
func RuleSelectionCriteria() FleetAppsManagementFleetRuleSelectionCriteriaOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference">FleetAppsManagementFleetRuleSelectionCriteriaOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeouts"></a>

```go
func Timeouts() FleetAppsManagementFleetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference">FleetAppsManagementFleetTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationTypeInput"></a>

```go
func ApplicationTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnvironmentTypeInput`<sup>Optional</sup> <a name="EnvironmentTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentTypeInput"></a>

```go
func EnvironmentTypeInput() *string
```

- *Type:* *string

---

##### `FleetTypeInput`<sup>Optional</sup> <a name="FleetTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetTypeInput"></a>

```go
func FleetTypeInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GroupTypeInput`<sup>Optional</sup> <a name="GroupTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupTypeInput"></a>

```go
func GroupTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsTargetAutoConfirmInput`<sup>Optional</sup> <a name="IsTargetAutoConfirmInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirmInput"></a>

```go
func IsTargetAutoConfirmInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationPreferencesInput`<sup>Optional</sup> <a name="NotificationPreferencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.notificationPreferencesInput"></a>

```go
func NotificationPreferencesInput() FleetAppsManagementFleetNotificationPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---

##### `ProductsInput`<sup>Optional</sup> <a name="ProductsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.productsInput"></a>

```go
func ProductsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceSelectionTypeInput`<sup>Optional</sup> <a name="ResourceSelectionTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionTypeInput"></a>

```go
func ResourceSelectionTypeInput() *string
```

- *Type:* *string

---

##### `RuleSelectionCriteriaInput`<sup>Optional</sup> <a name="RuleSelectionCriteriaInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.ruleSelectionCriteriaInput"></a>

```go
func RuleSelectionCriteriaInput() FleetAppsManagementFleetRuleSelectionCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnvironmentType`<sup>Required</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.environmentType"></a>

```go
func EnvironmentType() *string
```

- *Type:* *string

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.fleetType"></a>

```go
func FleetType() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GroupType`<sup>Required</sup> <a name="GroupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.groupType"></a>

```go
func GroupType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsTargetAutoConfirm`<sup>Required</sup> <a name="IsTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.isTargetAutoConfirm"></a>

```go
func IsTargetAutoConfirm() interface{}
```

- *Type:* interface{}

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceSelectionType`<sup>Required</sup> <a name="ResourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.resourceSelectionType"></a>

```go
func ResourceSelectionType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementFleetConfig <a name="FleetAppsManagementFleetConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

&fleetappsmanagementfleet.FleetAppsManagementFleetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	FleetType: *string,
	ApplicationType: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	EnvironmentType: *string,
	FreeformTags: *map[string]*string,
	GroupType: *string,
	Id: *string,
	IsTargetAutoConfirm: interface{},
	NotificationPreferences: github.com/rhizo-co/cdktf-provider-oci-go/oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences,
	Products: *[]*string,
	ResourceSelectionType: *string,
	RuleSelectionCriteria: github.com/rhizo-co/cdktf-provider-oci-go/oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.fleetType">FleetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.applicationType">ApplicationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.environmentType">EnvironmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.groupType">GroupType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.isTargetAutoConfirm">IsTargetAutoConfirm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.notificationPreferences">NotificationPreferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | notification_preferences block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.products">Products</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.resourceSelectionType">ResourceSelectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.ruleSelectionCriteria">RuleSelectionCriteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | rule_selection_criteria block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.fleetType"></a>

```go
FleetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#fleet_type FleetAppsManagementFleet#fleet_type}.

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.applicationType"></a>

```go
ApplicationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#application_type FleetAppsManagementFleet#application_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#defined_tags FleetAppsManagementFleet#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#description FleetAppsManagementFleet#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#display_name FleetAppsManagementFleet#display_name}.

---

##### `EnvironmentType`<sup>Optional</sup> <a name="EnvironmentType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.environmentType"></a>

```go
EnvironmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#environment_type FleetAppsManagementFleet#environment_type}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#freeform_tags FleetAppsManagementFleet#freeform_tags}.

---

##### `GroupType`<sup>Optional</sup> <a name="GroupType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.groupType"></a>

```go
GroupType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#group_type FleetAppsManagementFleet#group_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#id FleetAppsManagementFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsTargetAutoConfirm`<sup>Optional</sup> <a name="IsTargetAutoConfirm" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.isTargetAutoConfirm"></a>

```go
IsTargetAutoConfirm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#is_target_auto_confirm FleetAppsManagementFleet#is_target_auto_confirm}.

---

##### `NotificationPreferences`<sup>Optional</sup> <a name="NotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.notificationPreferences"></a>

```go
NotificationPreferences FleetAppsManagementFleetNotificationPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

notification_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#notification_preferences FleetAppsManagementFleet#notification_preferences}

---

##### `Products`<sup>Optional</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.products"></a>

```go
Products *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#products FleetAppsManagementFleet#products}.

---

##### `ResourceSelectionType`<sup>Optional</sup> <a name="ResourceSelectionType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.resourceSelectionType"></a>

```go
ResourceSelectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_selection_type FleetAppsManagementFleet#resource_selection_type}.

---

##### `RuleSelectionCriteria`<sup>Optional</sup> <a name="RuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.ruleSelectionCriteria"></a>

```go
RuleSelectionCriteria FleetAppsManagementFleetRuleSelectionCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

rule_selection_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rule_selection_criteria FleetAppsManagementFleet#rule_selection_criteria}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetConfig.property.timeouts"></a>

```go
Timeouts FleetAppsManagementFleetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts">FleetAppsManagementFleetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#timeouts FleetAppsManagementFleet#timeouts}

---

### FleetAppsManagementFleetNotificationPreferences <a name="FleetAppsManagementFleetNotificationPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

&fleetappsmanagementfleet.FleetAppsManagementFleetNotificationPreferences {
	CompartmentId: *string,
	TopicId: *string,
	Preferences: github.com/rhizo-co/cdktf-provider-oci-go/oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.topicId">TopicId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.preferences">Preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | preferences block. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.topicId"></a>

```go
TopicId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#topic_id FleetAppsManagementFleet#topic_id}.

---

##### `Preferences`<sup>Optional</sup> <a name="Preferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences.property.preferences"></a>

```go
Preferences FleetAppsManagementFleetNotificationPreferencesPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#preferences FleetAppsManagementFleet#preferences}

---

### FleetAppsManagementFleetNotificationPreferencesPreferences <a name="FleetAppsManagementFleetNotificationPreferencesPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

&fleetappsmanagementfleet.FleetAppsManagementFleetNotificationPreferencesPreferences {
	OnJobFailure: interface{},
	OnTopologyModification: interface{},
	OnUpcomingSchedule: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onJobFailure">OnJobFailure</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onTopologyModification">OnTopologyModification</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onUpcomingSchedule">OnUpcomingSchedule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}. |

---

##### `OnJobFailure`<sup>Optional</sup> <a name="OnJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onJobFailure"></a>

```go
OnJobFailure interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_job_failure FleetAppsManagementFleet#on_job_failure}.

---

##### `OnTopologyModification`<sup>Optional</sup> <a name="OnTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onTopologyModification"></a>

```go
OnTopologyModification interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_topology_modification FleetAppsManagementFleet#on_topology_modification}.

---

##### `OnUpcomingSchedule`<sup>Optional</sup> <a name="OnUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences.property.onUpcomingSchedule"></a>

```go
OnUpcomingSchedule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#on_upcoming_schedule FleetAppsManagementFleet#on_upcoming_schedule}.

---

### FleetAppsManagementFleetRuleSelectionCriteria <a name="FleetAppsManagementFleetRuleSelectionCriteria" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

&fleetappsmanagementfleet.FleetAppsManagementFleetRuleSelectionCriteria {
	MatchCondition: *string,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.matchCondition">MatchCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.matchCondition"></a>

```go
MatchCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#match_condition FleetAppsManagementFleet#match_condition}.

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#rules FleetAppsManagementFleet#rules}

---

### FleetAppsManagementFleetRuleSelectionCriteriaRules <a name="FleetAppsManagementFleetRuleSelectionCriteriaRules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

&fleetappsmanagementfleet.FleetAppsManagementFleetRuleSelectionCriteriaRules {
	CompartmentId: *string,
	Conditions: interface{},
	ResourceCompartmentId: *string,
	Basis: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.conditions">Conditions</a></code> | <code>interface{}</code> | conditions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.basis">Basis</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#compartment_id FleetAppsManagementFleet#compartment_id}.

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#conditions FleetAppsManagementFleet#conditions}

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.resourceCompartmentId"></a>

```go
ResourceCompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#resource_compartment_id FleetAppsManagementFleet#resource_compartment_id}.

---

##### `Basis`<sup>Optional</sup> <a name="Basis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRules.property.basis"></a>

```go
Basis *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#basis FleetAppsManagementFleet#basis}.

---

### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

&fleetappsmanagementfleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions {
	AttrGroup: *string,
	AttrKey: *string,
	AttrValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrGroup">AttrGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrKey">AttrKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrValue">AttrValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}. |

---

##### `AttrGroup`<sup>Required</sup> <a name="AttrGroup" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrGroup"></a>

```go
AttrGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_group FleetAppsManagementFleet#attr_group}.

---

##### `AttrKey`<sup>Required</sup> <a name="AttrKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrKey"></a>

```go
AttrKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_key FleetAppsManagementFleet#attr_key}.

---

##### `AttrValue`<sup>Required</sup> <a name="AttrValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditions.property.attrValue"></a>

```go
AttrValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#attr_value FleetAppsManagementFleet#attr_value}.

---

### FleetAppsManagementFleetTimeouts <a name="FleetAppsManagementFleetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

&fleetappsmanagementfleet.FleetAppsManagementFleetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#create FleetAppsManagementFleet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#delete FleetAppsManagementFleet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_fleet#update FleetAppsManagementFleet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementFleetNotificationPreferencesOutputReference <a name="FleetAppsManagementFleetNotificationPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetNotificationPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FleetAppsManagementFleetNotificationPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences">PutPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resetPreferences">ResetPreferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreferences` <a name="PutPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences"></a>

```go
func PutPreferences(value FleetAppsManagementFleetNotificationPreferencesPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.putPreferences.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---

##### `ResetPreferences` <a name="ResetPreferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.resetPreferences"></a>

```go
func ResetPreferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences">Preferences</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferencesInput">PreferencesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicIdInput">TopicIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId">TopicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Preferences`<sup>Required</sup> <a name="Preferences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferences"></a>

```go
func Preferences() FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference">FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `PreferencesInput`<sup>Optional</sup> <a name="PreferencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.preferencesInput"></a>

```go
func PreferencesInput() FleetAppsManagementFleetNotificationPreferencesPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicIdInput"></a>

```go
func TopicIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.topicId"></a>

```go
func TopicId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() FleetAppsManagementFleetNotificationPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferences">FleetAppsManagementFleetNotificationPreferences</a>

---


### FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference <a name="FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnJobFailure">ResetOnJobFailure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnTopologyModification">ResetOnTopologyModification</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnUpcomingSchedule">ResetOnUpcomingSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnJobFailure` <a name="ResetOnJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnJobFailure"></a>

```go
func ResetOnJobFailure()
```

##### `ResetOnTopologyModification` <a name="ResetOnTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnTopologyModification"></a>

```go
func ResetOnTopologyModification()
```

##### `ResetOnUpcomingSchedule` <a name="ResetOnUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.resetOnUpcomingSchedule"></a>

```go
func ResetOnUpcomingSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailureInput">OnJobFailureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModificationInput">OnTopologyModificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingScheduleInput">OnUpcomingScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure">OnJobFailure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification">OnTopologyModification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule">OnUpcomingSchedule</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnJobFailureInput`<sup>Optional</sup> <a name="OnJobFailureInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailureInput"></a>

```go
func OnJobFailureInput() interface{}
```

- *Type:* interface{}

---

##### `OnTopologyModificationInput`<sup>Optional</sup> <a name="OnTopologyModificationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModificationInput"></a>

```go
func OnTopologyModificationInput() interface{}
```

- *Type:* interface{}

---

##### `OnUpcomingScheduleInput`<sup>Optional</sup> <a name="OnUpcomingScheduleInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingScheduleInput"></a>

```go
func OnUpcomingScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `OnJobFailure`<sup>Required</sup> <a name="OnJobFailure" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onJobFailure"></a>

```go
func OnJobFailure() interface{}
```

- *Type:* interface{}

---

##### `OnTopologyModification`<sup>Required</sup> <a name="OnTopologyModification" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onTopologyModification"></a>

```go
func OnTopologyModification() interface{}
```

- *Type:* interface{}

---

##### `OnUpcomingSchedule`<sup>Required</sup> <a name="OnUpcomingSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.onUpcomingSchedule"></a>

```go
func OnUpcomingSchedule() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() FleetAppsManagementFleetNotificationPreferencesPreferences
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetNotificationPreferencesPreferences">FleetAppsManagementFleetNotificationPreferencesPreferences</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetRuleSelectionCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FleetAppsManagementFleetRuleSelectionCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList">FleetAppsManagementFleetRuleSelectionCriteriaRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition">MatchCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rules"></a>

```go
func Rules() FleetAppsManagementFleetRuleSelectionCriteriaRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList">FleetAppsManagementFleetRuleSelectionCriteriaRulesList</a>

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchConditionInput"></a>

```go
func MatchConditionInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.matchCondition"></a>

```go
func MatchCondition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() FleetAppsManagementFleetRuleSelectionCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteria">FleetAppsManagementFleetRuleSelectionCriteria</a>

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get"></a>

```go
func Get(index *f64) FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroupInput">AttrGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKeyInput">AttrKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValueInput">AttrValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup">AttrGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey">AttrKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue">AttrValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttrGroupInput`<sup>Optional</sup> <a name="AttrGroupInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroupInput"></a>

```go
func AttrGroupInput() *string
```

- *Type:* *string

---

##### `AttrKeyInput`<sup>Optional</sup> <a name="AttrKeyInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKeyInput"></a>

```go
func AttrKeyInput() *string
```

- *Type:* *string

---

##### `AttrValueInput`<sup>Optional</sup> <a name="AttrValueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValueInput"></a>

```go
func AttrValueInput() *string
```

- *Type:* *string

---

##### `AttrGroup`<sup>Required</sup> <a name="AttrGroup" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrGroup"></a>

```go
func AttrGroup() *string
```

- *Type:* *string

---

##### `AttrKey`<sup>Required</sup> <a name="AttrKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrKey"></a>

```go
func AttrKey() *string
```

- *Type:* *string

---

##### `AttrValue`<sup>Required</sup> <a name="AttrValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.attrValue"></a>

```go
func AttrValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesList <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetRuleSelectionCriteriaRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FleetAppsManagementFleetRuleSelectionCriteriaRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get"></a>

```go
func Get(index *f64) FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference <a name="FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resetBasis">ResetBasis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBasis` <a name="ResetBasis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.resetBasis"></a>

```go
func ResetBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basisInput">BasisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentIdInput">ResourceCompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis">Basis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditions"></a>

```go
func Conditions() FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList">FleetAppsManagementFleetRuleSelectionCriteriaRulesConditionsList</a>

---

##### `BasisInput`<sup>Optional</sup> <a name="BasisInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basisInput"></a>

```go
func BasisInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceCompartmentIdInput`<sup>Optional</sup> <a name="ResourceCompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentIdInput"></a>

```go
func ResourceCompartmentIdInput() *string
```

- *Type:* *string

---

##### `Basis`<sup>Required</sup> <a name="Basis" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.basis"></a>

```go
func Basis() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.resourceCompartmentId"></a>

```go
func ResourceCompartmentId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetRuleSelectionCriteriaRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementFleetTimeoutsOutputReference <a name="FleetAppsManagementFleetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementfleet"

fleetappsmanagementfleet.NewFleetAppsManagementFleetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FleetAppsManagementFleetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementFleet.FleetAppsManagementFleetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



