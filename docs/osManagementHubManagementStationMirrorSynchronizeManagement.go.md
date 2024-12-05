# `osManagementHubManagementStationMirrorSynchronizeManagement` Submodule <a name="`osManagementHubManagementStationMirrorSynchronizeManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubManagementStationMirrorSynchronizeManagement <a name="OsManagementHubManagementStationMirrorSynchronizeManagement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management oci_os_management_hub_management_station_mirror_synchronize_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

osmanagementhubmanagementstationmirrorsynchronizemanagement.NewOsManagementHubManagementStationMirrorSynchronizeManagement(scope Construct, id *string, config OsManagementHubManagementStationMirrorSynchronizeManagementConfig) OsManagementHubManagementStationMirrorSynchronizeManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig">OsManagementHubManagementStationMirrorSynchronizeManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig">OsManagementHubManagementStationMirrorSynchronizeManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.putTimeouts"></a>

```go
func PutTimeouts(value OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts">OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubManagementStationMirrorSynchronizeManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

osmanagementhubmanagementstationmirrorsynchronizemanagement.OsManagementHubManagementStationMirrorSynchronizeManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

osmanagementhubmanagementstationmirrorsynchronizemanagement.OsManagementHubManagementStationMirrorSynchronizeManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

osmanagementhubmanagementstationmirrorsynchronizemanagement.OsManagementHubManagementStationMirrorSynchronizeManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

osmanagementhubmanagementstationmirrorsynchronizemanagement.OsManagementHubManagementStationMirrorSynchronizeManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsManagementHubManagementStationMirrorSynchronizeManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsManagementHubManagementStationMirrorSynchronizeManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsManagementHubManagementStationMirrorSynchronizeManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubManagementStationMirrorSynchronizeManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference">OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationIdInput">ManagementStationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorIdInput">MirrorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationId">ManagementStationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorId">MirrorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeouts"></a>

```go
func Timeouts() OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference">OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagementStationIdInput`<sup>Optional</sup> <a name="ManagementStationIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationIdInput"></a>

```go
func ManagementStationIdInput() *string
```

- *Type:* *string

---

##### `MirrorIdInput`<sup>Optional</sup> <a name="MirrorIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorIdInput"></a>

```go
func MirrorIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagementStationId`<sup>Required</sup> <a name="ManagementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.managementStationId"></a>

```go
func ManagementStationId() *string
```

- *Type:* *string

---

##### `MirrorId`<sup>Required</sup> <a name="MirrorId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.mirrorId"></a>

```go
func MirrorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubManagementStationMirrorSynchronizeManagementConfig <a name="OsManagementHubManagementStationMirrorSynchronizeManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

&osmanagementhubmanagementstationmirrorsynchronizemanagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagementStationId: *string,
	MirrorId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.managementStationId">ManagementStationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#management_station_id OsManagementHubManagementStationMirrorSynchronizeManagement#management_station_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.mirrorId">MirrorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#mirror_id OsManagementHubManagementStationMirrorSynchronizeManagement#mirror_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#id OsManagementHubManagementStationMirrorSynchronizeManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts">OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagementStationId`<sup>Required</sup> <a name="ManagementStationId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.managementStationId"></a>

```go
ManagementStationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#management_station_id OsManagementHubManagementStationMirrorSynchronizeManagement#management_station_id}.

---

##### `MirrorId`<sup>Required</sup> <a name="MirrorId" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.mirrorId"></a>

```go
MirrorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#mirror_id OsManagementHubManagementStationMirrorSynchronizeManagement#mirror_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#id OsManagementHubManagementStationMirrorSynchronizeManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementConfig.property.timeouts"></a>

```go
Timeouts OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts">OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#timeouts OsManagementHubManagementStationMirrorSynchronizeManagement#timeouts}

---

### OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts <a name="OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

&osmanagementhubmanagementstationmirrorsynchronizemanagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#create OsManagementHubManagementStationMirrorSynchronizeManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#delete OsManagementHubManagementStationMirrorSynchronizeManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#update OsManagementHubManagementStationMirrorSynchronizeManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#create OsManagementHubManagementStationMirrorSynchronizeManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#delete OsManagementHubManagementStationMirrorSynchronizeManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_management_station_mirror_synchronize_management#update OsManagementHubManagementStationMirrorSynchronizeManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference <a name="OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubmanagementstationmirrorsynchronizemanagement"

osmanagementhubmanagementstationmirrorsynchronizemanagement.NewOsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubManagementStationMirrorSynchronizeManagement.OsManagementHubManagementStationMirrorSynchronizeManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


