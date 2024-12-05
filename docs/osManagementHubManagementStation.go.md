# `osManagementHubManagementStation` Submodule <a name="`osManagementHubManagementStation` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagementStation <a name="OsManagementHubManagementStation" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station oci_os_management_hub_management_station}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStation(scope Construct, id *string, config OsManagementHubManagementStationConfig) OsManagementHubManagementStation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig">OsManagementHubManagementStationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig">OsManagementHubManagementStationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror">PutMirror</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetRefreshTrigger">ResetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMirror` <a name="PutMirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror"></a>

```go
func PutMirror(value OsManagementHubManagementStationMirror)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putMirror.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---

##### `PutProxy` <a name="PutProxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy"></a>

```go
func PutProxy(value OsManagementHubManagementStationProxy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putProxy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts"></a>

```go
func PutTimeouts(value OsManagementHubManagementStationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetId"></a>

```go
func ResetId()
```

##### `ResetRefreshTrigger` <a name="ResetRefreshTrigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetRefreshTrigger"></a>

```go
func ResetRefreshTrigger()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagementStation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.OsManagementHubManagementStation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.OsManagementHubManagementStation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.OsManagementHubManagementStation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.OsManagementHubManagementStation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsManagementHubManagementStation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsManagementHubManagementStation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsManagementHubManagementStation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagementStation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.health">Health</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList">OsManagementHubManagementStationHealthList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirror">Mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference">OsManagementHubManagementStationMirrorOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorCapacity">MirrorCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorSyncStatus">MirrorSyncStatus</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList">OsManagementHubManagementStationMirrorSyncStatusList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallPercentage">OverallPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallState">OverallState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxy">Proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference">OsManagementHubManagementStationProxyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.scheduledJobId">ScheduledJobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference">OsManagementHubManagementStationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.totalMirrors">TotalMirrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorInput">MirrorInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxyInput">ProxyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTriggerInput">RefreshTriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Health`<sup>Required</sup> <a name="Health" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.health"></a>

```go
func Health() OsManagementHubManagementStationHealthList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList">OsManagementHubManagementStationHealthList</a>

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `Mirror`<sup>Required</sup> <a name="Mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirror"></a>

```go
func Mirror() OsManagementHubManagementStationMirrorOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference">OsManagementHubManagementStationMirrorOutputReference</a>

---

##### `MirrorCapacity`<sup>Required</sup> <a name="MirrorCapacity" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorCapacity"></a>

```go
func MirrorCapacity() *f64
```

- *Type:* *f64

---

##### `MirrorSyncStatus`<sup>Required</sup> <a name="MirrorSyncStatus" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorSyncStatus"></a>

```go
func MirrorSyncStatus() OsManagementHubManagementStationMirrorSyncStatusList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList">OsManagementHubManagementStationMirrorSyncStatusList</a>

---

##### `OverallPercentage`<sup>Required</sup> <a name="OverallPercentage" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallPercentage"></a>

```go
func OverallPercentage() *f64
```

- *Type:* *f64

---

##### `OverallState`<sup>Required</sup> <a name="OverallState" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.overallState"></a>

```go
func OverallState() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxy"></a>

```go
func Proxy() OsManagementHubManagementStationProxyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference">OsManagementHubManagementStationProxyOutputReference</a>

---

##### `ScheduledJobId`<sup>Required</sup> <a name="ScheduledJobId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.scheduledJobId"></a>

```go
func ScheduledJobId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeouts"></a>

```go
func Timeouts() OsManagementHubManagementStationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference">OsManagementHubManagementStationTimeoutsOutputReference</a>

---

##### `TotalMirrors`<sup>Required</sup> <a name="TotalMirrors" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.totalMirrors"></a>

```go
func TotalMirrors() *f64
```

- *Type:* *f64

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MirrorInput`<sup>Optional</sup> <a name="MirrorInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.mirrorInput"></a>

```go
func MirrorInput() OsManagementHubManagementStationMirror
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.proxyInput"></a>

```go
func ProxyInput() OsManagementHubManagementStationProxy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---

##### `RefreshTriggerInput`<sup>Optional</sup> <a name="RefreshTriggerInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTriggerInput"></a>

```go
func RefreshTriggerInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.refreshTrigger"></a>

```go
func RefreshTrigger() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagementStationConfig <a name="OsManagementHubManagementStationConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

&osmanagementhubmanagementstation.OsManagementHubManagementStationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Hostname: *string,
	Mirror: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror,
	Proxy: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	RefreshTrigger: *f64,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.mirror">Mirror</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | mirror block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.proxy">Proxy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | proxy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#compartment_id OsManagementHubManagementStation#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#display_name OsManagementHubManagementStation#display_name}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hostname OsManagementHubManagementStation#hostname}.

---

##### `Mirror`<sup>Required</sup> <a name="Mirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.mirror"></a>

```go
Mirror OsManagementHubManagementStationMirror
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

mirror block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#mirror OsManagementHubManagementStation#mirror}

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.proxy"></a>

```go
Proxy OsManagementHubManagementStationProxy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#proxy OsManagementHubManagementStation#proxy}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#defined_tags OsManagementHubManagementStation#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#description OsManagementHubManagementStation#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#freeform_tags OsManagementHubManagementStation#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#id OsManagementHubManagementStation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshTrigger`<sup>Optional</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.refreshTrigger"></a>

```go
RefreshTrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#refresh_trigger OsManagementHubManagementStation#refresh_trigger}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationConfig.property.timeouts"></a>

```go
Timeouts OsManagementHubManagementStationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts">OsManagementHubManagementStationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#timeouts OsManagementHubManagementStation#timeouts}

---

### OsManagementHubManagementStationHealth <a name="OsManagementHubManagementStationHealth" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

&osmanagementhubmanagementstation.OsManagementHubManagementStationHealth {

}
```


### OsManagementHubManagementStationMirror <a name="OsManagementHubManagementStationMirror" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

&osmanagementhubmanagementstation.OsManagementHubManagementStationMirror {
	Directory: *string,
	Port: *string,
	Sslport: *string,
	Sslcert: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.directory">Directory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#directory OsManagementHubManagementStation#directory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslport">Sslport</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslport OsManagementHubManagementStation#sslport}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslcert">Sslcert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslcert OsManagementHubManagementStation#sslcert}. |

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#directory OsManagementHubManagementStation#directory}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

##### `Sslport`<sup>Required</sup> <a name="Sslport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslport"></a>

```go
Sslport *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslport OsManagementHubManagementStation#sslport}.

---

##### `Sslcert`<sup>Optional</sup> <a name="Sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror.property.sslcert"></a>

```go
Sslcert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#sslcert OsManagementHubManagementStation#sslcert}.

---

### OsManagementHubManagementStationMirrorSyncStatus <a name="OsManagementHubManagementStationMirrorSyncStatus" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

&osmanagementhubmanagementstation.OsManagementHubManagementStationMirrorSyncStatus {

}
```


### OsManagementHubManagementStationProxy <a name="OsManagementHubManagementStationProxy" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

&osmanagementhubmanagementstation.OsManagementHubManagementStationProxy {
	IsEnabled: interface{},
	Forward: *string,
	Hosts: *[]*string,
	Port: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#is_enabled OsManagementHubManagementStation#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.forward">Forward</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#forward OsManagementHubManagementStation#forward}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.hosts">Hosts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hosts OsManagementHubManagementStation#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#is_enabled OsManagementHubManagementStation#is_enabled}.

---

##### `Forward`<sup>Optional</sup> <a name="Forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.forward"></a>

```go
Forward *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#forward OsManagementHubManagementStation#forward}.

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.hosts"></a>

```go
Hosts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#hosts OsManagementHubManagementStation#hosts}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#port OsManagementHubManagementStation#port}.

---

### OsManagementHubManagementStationTimeouts <a name="OsManagementHubManagementStationTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

&osmanagementhubmanagementstation.OsManagementHubManagementStationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#create OsManagementHubManagementStation#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#delete OsManagementHubManagementStation#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#update OsManagementHubManagementStation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#create OsManagementHubManagementStation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#delete OsManagementHubManagementStation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station#update OsManagementHubManagementStation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagementStationHealthList <a name="OsManagementHubManagementStationHealthList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStationHealthList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubManagementStationHealthList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get"></a>

```go
func Get(index *f64) OsManagementHubManagementStationHealthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsManagementHubManagementStationHealthOutputReference <a name="OsManagementHubManagementStationHealthOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStationHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubManagementStationHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth">OsManagementHubManagementStationHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubManagementStationHealth
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationHealth">OsManagementHubManagementStationHealth</a>

---


### OsManagementHubManagementStationMirrorOutputReference <a name="OsManagementHubManagementStationMirrorOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStationMirrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagementStationMirrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resetSslcert">ResetSslcert</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSslcert` <a name="ResetSslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.resetSslcert"></a>

```go
func ResetSslcert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcertInput">SslcertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslportInput">SslportInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcert">Sslcert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslport">Sslport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `SslcertInput`<sup>Optional</sup> <a name="SslcertInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcertInput"></a>

```go
func SslcertInput() *string
```

- *Type:* *string

---

##### `SslportInput`<sup>Optional</sup> <a name="SslportInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslportInput"></a>

```go
func SslportInput() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Sslcert`<sup>Required</sup> <a name="Sslcert" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslcert"></a>

```go
func Sslcert() *string
```

- *Type:* *string

---

##### `Sslport`<sup>Required</sup> <a name="Sslport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.sslport"></a>

```go
func Sslport() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubManagementStationMirror
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirror">OsManagementHubManagementStationMirror</a>

---


### OsManagementHubManagementStationMirrorSyncStatusList <a name="OsManagementHubManagementStationMirrorSyncStatusList" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStationMirrorSyncStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubManagementStationMirrorSyncStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get"></a>

```go
func Get(index *f64) OsManagementHubManagementStationMirrorSyncStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OsManagementHubManagementStationMirrorSyncStatusOutputReference <a name="OsManagementHubManagementStationMirrorSyncStatusOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStationMirrorSyncStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubManagementStationMirrorSyncStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.failed">Failed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.queued">Queued</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.synced">Synced</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.syncing">Syncing</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.unsynced">Unsynced</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus">OsManagementHubManagementStationMirrorSyncStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Failed`<sup>Required</sup> <a name="Failed" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.failed"></a>

```go
func Failed() *f64
```

- *Type:* *f64

---

##### `Queued`<sup>Required</sup> <a name="Queued" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.queued"></a>

```go
func Queued() *f64
```

- *Type:* *f64

---

##### `Synced`<sup>Required</sup> <a name="Synced" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.synced"></a>

```go
func Synced() *f64
```

- *Type:* *f64

---

##### `Syncing`<sup>Required</sup> <a name="Syncing" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.syncing"></a>

```go
func Syncing() *f64
```

- *Type:* *f64

---

##### `Unsynced`<sup>Required</sup> <a name="Unsynced" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.unsynced"></a>

```go
func Unsynced() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubManagementStationMirrorSyncStatus
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationMirrorSyncStatus">OsManagementHubManagementStationMirrorSyncStatus</a>

---


### OsManagementHubManagementStationProxyOutputReference <a name="OsManagementHubManagementStationProxyOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStationProxyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagementStationProxyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetForward">ResetForward</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForward` <a name="ResetForward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetForward"></a>

```go
func ResetForward()
```

##### `ResetHosts` <a name="ResetHosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetHosts"></a>

```go
func ResetHosts()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forwardInput">ForwardInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hostsInput">HostsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forward">Forward</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardInput`<sup>Optional</sup> <a name="ForwardInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forwardInput"></a>

```go
func ForwardInput() *string
```

- *Type:* *string

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hostsInput"></a>

```go
func HostsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `Forward`<sup>Required</sup> <a name="Forward" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.forward"></a>

```go
func Forward() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxyOutputReference.property.internalValue"></a>

```go
func InternalValue() OsManagementHubManagementStationProxy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationProxy">OsManagementHubManagementStationProxy</a>

---


### OsManagementHubManagementStationTimeoutsOutputReference <a name="OsManagementHubManagementStationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstation"

osmanagementhubmanagementstation.NewOsManagementHubManagementStationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagementStationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStation.OsManagementHubManagementStationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



