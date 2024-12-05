# `fleetAppsManagementSchedulerDefinition` Submodule <a name="`fleetAppsManagementSchedulerDefinition` Submodule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FleetAppsManagementSchedulerDefinition <a name="FleetAppsManagementSchedulerDefinition" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinition(scope Construct, id *string, config FleetAppsManagementSchedulerDefinitionConfig) FleetAppsManagementSchedulerDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig">FleetAppsManagementSchedulerDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig">FleetAppsManagementSchedulerDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups">PutActionGroups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks">PutRunBooks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetActivityInitiationCutOff">ResetActivityInitiationCutOff</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetRunBooks">ResetRunBooks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionGroups` <a name="PutActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups"></a>

```go
func PutActionGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putActionGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRunBooks` <a name="PutRunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks"></a>

```go
func PutRunBooks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putRunBooks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedule` <a name="PutSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule"></a>

```go
func PutSchedule(value FleetAppsManagementSchedulerDefinitionSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts"></a>

```go
func PutTimeouts(value FleetAppsManagementSchedulerDefinitionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

---

##### `ResetActivityInitiationCutOff` <a name="ResetActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetActivityInitiationCutOff"></a>

```go
func ResetActivityInitiationCutOff()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetId"></a>

```go
func ResetId()
```

##### `ResetRunBooks` <a name="ResetRunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetRunBooks"></a>

```go
func ResetRunBooks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinition_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FleetAppsManagementSchedulerDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FleetAppsManagementSchedulerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FleetAppsManagementSchedulerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroups">ActionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList">FleetAppsManagementSchedulerDefinitionActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupTypes">ActionGroupTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.applicationTypes">ApplicationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups">CountOfAffectedActionGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedResources">CountOfAffectedResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets">CountOfAffectedTargets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleOperations">LifecycleOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooks">RunBooks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList">FleetAppsManagementSchedulerDefinitionRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference">FleetAppsManagementSchedulerDefinitionScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeOfNextRun">TimeOfNextRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference">FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupsInput">ActionGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOffInput">ActivityInitiationCutOffInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooksInput">RunBooksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff">ActivityInitiationCutOff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroups"></a>

```go
func ActionGroups() FleetAppsManagementSchedulerDefinitionActionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList">FleetAppsManagementSchedulerDefinitionActionGroupsList</a>

---

##### `ActionGroupTypes`<sup>Required</sup> <a name="ActionGroupTypes" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupTypes"></a>

```go
func ActionGroupTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ApplicationTypes`<sup>Required</sup> <a name="ApplicationTypes" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.applicationTypes"></a>

```go
func ApplicationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CountOfAffectedActionGroups`<sup>Required</sup> <a name="CountOfAffectedActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups"></a>

```go
func CountOfAffectedActionGroups() *f64
```

- *Type:* *f64

---

##### `CountOfAffectedResources`<sup>Required</sup> <a name="CountOfAffectedResources" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedResources"></a>

```go
func CountOfAffectedResources() *f64
```

- *Type:* *f64

---

##### `CountOfAffectedTargets`<sup>Required</sup> <a name="CountOfAffectedTargets" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets"></a>

```go
func CountOfAffectedTargets() *f64
```

- *Type:* *f64

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleOperations`<sup>Required</sup> <a name="LifecycleOperations" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.lifecycleOperations"></a>

```go
func LifecycleOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `RunBooks`<sup>Required</sup> <a name="RunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooks"></a>

```go
func RunBooks() FleetAppsManagementSchedulerDefinitionRunBooksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList">FleetAppsManagementSchedulerDefinitionRunBooksList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.schedule"></a>

```go
func Schedule() FleetAppsManagementSchedulerDefinitionScheduleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference">FleetAppsManagementSchedulerDefinitionScheduleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfNextRun`<sup>Required</sup> <a name="TimeOfNextRun" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeOfNextRun"></a>

```go
func TimeOfNextRun() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeouts"></a>

```go
func Timeouts() FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference">FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ActionGroupsInput`<sup>Optional</sup> <a name="ActionGroupsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.actionGroupsInput"></a>

```go
func ActionGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `ActivityInitiationCutOffInput`<sup>Optional</sup> <a name="ActivityInitiationCutOffInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOffInput"></a>

```go
func ActivityInitiationCutOffInput() *f64
```

- *Type:* *f64

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RunBooksInput`<sup>Optional</sup> <a name="RunBooksInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.runBooksInput"></a>

```go
func RunBooksInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.scheduleInput"></a>

```go
func ScheduleInput() FleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActivityInitiationCutOff`<sup>Required</sup> <a name="ActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff"></a>

```go
func ActivityInitiationCutOff() *f64
```

- *Type:* *f64

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FleetAppsManagementSchedulerDefinitionActionGroups <a name="FleetAppsManagementSchedulerDefinitionActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

&fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinitionActionGroups {
	ResourceId: *string,
	RunbookId: *string,
	ApplicationType: *string,
	LifecycleOperation: *string,
	Product: *string,
	Subjects: *[]*string,
	TargetId: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#resource_id FleetAppsManagementSchedulerDefinition#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.runbookId">RunbookId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.applicationType">ApplicationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#application_type FleetAppsManagementSchedulerDefinition#application_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.lifecycleOperation">LifecycleOperation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#lifecycle_operation FleetAppsManagementSchedulerDefinition#lifecycle_operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.product">Product</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#product FleetAppsManagementSchedulerDefinition#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.subjects">Subjects</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#subjects FleetAppsManagementSchedulerDefinition#subjects}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#target_id FleetAppsManagementSchedulerDefinition#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}. |

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#resource_id FleetAppsManagementSchedulerDefinition#resource_id}.

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.runbookId"></a>

```go
RunbookId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#runbook_id FleetAppsManagementSchedulerDefinition#runbook_id}.

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.applicationType"></a>

```go
ApplicationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#application_type FleetAppsManagementSchedulerDefinition#application_type}.

---

##### `LifecycleOperation`<sup>Optional</sup> <a name="LifecycleOperation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.lifecycleOperation"></a>

```go
LifecycleOperation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#lifecycle_operation FleetAppsManagementSchedulerDefinition#lifecycle_operation}.

---

##### `Product`<sup>Optional</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.product"></a>

```go
Product *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#product FleetAppsManagementSchedulerDefinition#product}.

---

##### `Subjects`<sup>Optional</sup> <a name="Subjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.subjects"></a>

```go
Subjects *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#subjects FleetAppsManagementSchedulerDefinition#subjects}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#target_id FleetAppsManagementSchedulerDefinition#target_id}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroups.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}.

---

### FleetAppsManagementSchedulerDefinitionConfig <a name="FleetAppsManagementSchedulerDefinitionConfig" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

&fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActionGroups: interface{},
	CompartmentId: *string,
	Schedule: github.com/rhizo-co/cdktf-provider-oci-go/oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule,
	ActivityInitiationCutOff: *f64,
	DefinedTags: *map[string]*string,
	Description: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	RunBooks: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.actionGroups">ActionGroups</a></code> | <code>interface{}</code> | action_groups block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.activityInitiationCutOff">ActivityInitiationCutOff</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.runBooks">RunBooks</a></code> | <code>interface{}</code> | run_books block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.actionGroups"></a>

```go
ActionGroups interface{}
```

- *Type:* interface{}

action_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#action_groups FleetAppsManagementSchedulerDefinition#action_groups}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#compartment_id FleetAppsManagementSchedulerDefinition#compartment_id}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.schedule"></a>

```go
Schedule FleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#schedule FleetAppsManagementSchedulerDefinition#schedule}

---

##### `ActivityInitiationCutOff`<sup>Optional</sup> <a name="ActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.activityInitiationCutOff"></a>

```go
ActivityInitiationCutOff *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#activity_initiation_cut_off FleetAppsManagementSchedulerDefinition#activity_initiation_cut_off}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#defined_tags FleetAppsManagementSchedulerDefinition#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#description FleetAppsManagementSchedulerDefinition#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#display_name FleetAppsManagementSchedulerDefinition#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#freeform_tags FleetAppsManagementSchedulerDefinition#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RunBooks`<sup>Optional</sup> <a name="RunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.runBooks"></a>

```go
RunBooks interface{}
```

- *Type:* interface{}

run_books block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#run_books FleetAppsManagementSchedulerDefinition#run_books}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionConfig.property.timeouts"></a>

```go
Timeouts FleetAppsManagementSchedulerDefinitionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts">FleetAppsManagementSchedulerDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#timeouts FleetAppsManagementSchedulerDefinition#timeouts}

---

### FleetAppsManagementSchedulerDefinitionRunBooks <a name="FleetAppsManagementSchedulerDefinitionRunBooks" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

&fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinitionRunBooks {
	Id: *string,
	InputParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.inputParameters">InputParameters</a></code> | <code>interface{}</code> | input_parameters block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#id FleetAppsManagementSchedulerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooks.property.inputParameters"></a>

```go
InputParameters interface{}
```

- *Type:* interface{}

input_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#input_parameters FleetAppsManagementSchedulerDefinition#input_parameters}

---

### FleetAppsManagementSchedulerDefinitionRunBooksInputParameters <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

&fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters {
	StepName: *string,
	Arguments: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.stepName">StepName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#step_name FleetAppsManagementSchedulerDefinition#step_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.arguments">Arguments</a></code> | <code>interface{}</code> | arguments block. |

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.stepName"></a>

```go
StepName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#step_name FleetAppsManagementSchedulerDefinition#step_name}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParameters.property.arguments"></a>

```go
Arguments interface{}
```

- *Type:* interface{}

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#arguments FleetAppsManagementSchedulerDefinition#arguments}

---

### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

&fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#name FleetAppsManagementSchedulerDefinition#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#value FleetAppsManagementSchedulerDefinition#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#name FleetAppsManagementSchedulerDefinition#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#value FleetAppsManagementSchedulerDefinition#value}.

---

### FleetAppsManagementSchedulerDefinitionSchedule <a name="FleetAppsManagementSchedulerDefinitionSchedule" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

&fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinitionSchedule {
	ExecutionStartdate: *string,
	Type: *string,
	Duration: *string,
	MaintenanceWindowId: *string,
	Recurrences: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.executionStartdate">ExecutionStartdate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.recurrences">Recurrences</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}. |

---

##### `ExecutionStartdate`<sup>Required</sup> <a name="ExecutionStartdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.executionStartdate"></a>

```go
ExecutionStartdate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#execution_startdate FleetAppsManagementSchedulerDefinition#execution_startdate}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#type FleetAppsManagementSchedulerDefinition#type}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#duration FleetAppsManagementSchedulerDefinition#duration}.

---

##### `MaintenanceWindowId`<sup>Optional</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.maintenanceWindowId"></a>

```go
MaintenanceWindowId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#maintenance_window_id FleetAppsManagementSchedulerDefinition#maintenance_window_id}.

---

##### `Recurrences`<sup>Optional</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule.property.recurrences"></a>

```go
Recurrences *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#recurrences FleetAppsManagementSchedulerDefinition#recurrences}.

---

### FleetAppsManagementSchedulerDefinitionTimeouts <a name="FleetAppsManagementSchedulerDefinitionTimeouts" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

&fleetappsmanagementschedulerdefinition.FleetAppsManagementSchedulerDefinitionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#create FleetAppsManagementSchedulerDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#delete FleetAppsManagementSchedulerDefinition#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fleet_apps_management_scheduler_definition#update FleetAppsManagementSchedulerDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FleetAppsManagementSchedulerDefinitionActionGroupsList <a name="FleetAppsManagementSchedulerDefinitionActionGroupsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionActionGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FleetAppsManagementSchedulerDefinitionActionGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get"></a>

```go
func Get(index *f64) FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference <a name="FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetLifecycleOperation">ResetLifecycleOperation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetProduct">ResetProduct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetSubjects">ResetSubjects</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationType` <a name="ResetApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetApplicationType"></a>

```go
func ResetApplicationType()
```

##### `ResetLifecycleOperation` <a name="ResetLifecycleOperation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetLifecycleOperation"></a>

```go
func ResetLifecycleOperation()
```

##### `ResetProduct` <a name="ResetProduct" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetProduct"></a>

```go
func ResetProduct()
```

##### `ResetSubjects` <a name="ResetSubjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetSubjects"></a>

```go
func ResetSubjects()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperationInput">LifecycleOperationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.productInput">ProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookIdInput">RunbookIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjectsInput">SubjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation">LifecycleOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId">RunbookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects">Subjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationTypeInput"></a>

```go
func ApplicationTypeInput() *string
```

- *Type:* *string

---

##### `LifecycleOperationInput`<sup>Optional</sup> <a name="LifecycleOperationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperationInput"></a>

```go
func LifecycleOperationInput() *string
```

- *Type:* *string

---

##### `ProductInput`<sup>Optional</sup> <a name="ProductInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.productInput"></a>

```go
func ProductInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookIdInput"></a>

```go
func RunbookIdInput() *string
```

- *Type:* *string

---

##### `SubjectsInput`<sup>Optional</sup> <a name="SubjectsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjectsInput"></a>

```go
func SubjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `LifecycleOperation`<sup>Required</sup> <a name="LifecycleOperation" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation"></a>

```go
func LifecycleOperation() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId"></a>

```go
func RunbookId() *string
```

- *Type:* *string

---

##### `Subjects`<sup>Required</sup> <a name="Subjects" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects"></a>

```go
func Subjects() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get"></a>

```go
func Get(index *f64) FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get"></a>

```go
func Get(index *f64) FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArguments` <a name="PutArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments"></a>

```go
func PutArguments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.putArguments.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArguments` <a name="ResetArguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resetArguments"></a>

```go
func ResetArguments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments">Arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepNameInput">StepNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments"></a>

```go
func Arguments() FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.argumentsInput"></a>

```go
func ArgumentsInput() interface{}
```

- *Type:* interface{}

---

##### `StepNameInput`<sup>Optional</sup> <a name="StepNameInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepNameInput"></a>

```go
func StepNameInput() *string
```

- *Type:* *string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionRunBooksList <a name="FleetAppsManagementSchedulerDefinitionRunBooksList" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionRunBooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FleetAppsManagementSchedulerDefinitionRunBooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get"></a>

```go
func Get(index *f64) FleetAppsManagementSchedulerDefinitionRunBooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionRunBooksOutputReference <a name="FleetAppsManagementSchedulerDefinitionRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionRunBooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FleetAppsManagementSchedulerDefinitionRunBooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters">PutInputParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resetInputParameters">ResetInputParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputParameters` <a name="PutInputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters"></a>

```go
func PutInputParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.putInputParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetInputParameters` <a name="ResetInputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resetInputParameters"></a>

```go
func ResetInputParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters">InputParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParametersInput">InputParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters"></a>

```go
func InputParameters() FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">FleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParametersInput"></a>

```go
func InputParametersInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FleetAppsManagementSchedulerDefinitionScheduleOutputReference <a name="FleetAppsManagementSchedulerDefinitionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FleetAppsManagementSchedulerDefinitionScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetMaintenanceWindowId">ResetMaintenanceWindowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetRecurrences">ResetRecurrences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetMaintenanceWindowId` <a name="ResetMaintenanceWindowId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetMaintenanceWindowId"></a>

```go
func ResetMaintenanceWindowId()
```

##### `ResetRecurrences` <a name="ResetRecurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.resetRecurrences"></a>

```go
func ResetRecurrences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdateInput">ExecutionStartdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowIdInput">MaintenanceWindowIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrencesInput">RecurrencesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate">ExecutionStartdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences">Recurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `ExecutionStartdateInput`<sup>Optional</sup> <a name="ExecutionStartdateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdateInput"></a>

```go
func ExecutionStartdateInput() *string
```

- *Type:* *string

---

##### `MaintenanceWindowIdInput`<sup>Optional</sup> <a name="MaintenanceWindowIdInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowIdInput"></a>

```go
func MaintenanceWindowIdInput() *string
```

- *Type:* *string

---

##### `RecurrencesInput`<sup>Optional</sup> <a name="RecurrencesInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrencesInput"></a>

```go
func RecurrencesInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ExecutionStartdate`<sup>Required</sup> <a name="ExecutionStartdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate"></a>

```go
func ExecutionStartdate() *string
```

- *Type:* *string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId"></a>

```go
func MaintenanceWindowId() *string
```

- *Type:* *string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences"></a>

```go
func Recurrences() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() FleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionSchedule">FleetAppsManagementSchedulerDefinitionSchedule</a>

---


### FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference <a name="FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fleetappsmanagementschedulerdefinition"

fleetappsmanagementschedulerdefinition.NewFleetAppsManagementSchedulerDefinitionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fleetAppsManagementSchedulerDefinition.FleetAppsManagementSchedulerDefinitionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



