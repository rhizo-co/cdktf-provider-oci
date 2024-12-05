# `osManagementHubSoftwareSourceChangeAvailabilityManagement` Submodule <a name="`osManagementHubSoftwareSourceChangeAvailabilityManagement` Submodule" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagement <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagement" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management oci_os_management_hub_software_source_change_availability_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.NewOsManagementHubSoftwareSourceChangeAvailabilityManagement(scope Construct, id *string, config OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig) OsManagementHubSoftwareSourceChangeAvailabilityManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig">OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig">OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities">PutSoftwareSourceAvailabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSoftwareSourceAvailabilities` <a name="PutSoftwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities"></a>

```go
func PutSoftwareSourceAvailabilities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putSoftwareSourceAvailabilities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts"></a>

```go
func PutTimeouts(value OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OsManagementHubSoftwareSourceChangeAvailabilityManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OsManagementHubSoftwareSourceChangeAvailabilityManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OsManagementHubSoftwareSourceChangeAvailabilityManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OsManagementHubSoftwareSourceChangeAvailabilityManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilities">SoftwareSourceAvailabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilitiesInput">SoftwareSourceAvailabilitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SoftwareSourceAvailabilities`<sup>Required</sup> <a name="SoftwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilities"></a>

```go
func SoftwareSourceAvailabilities() OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList">OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeouts"></a>

```go
func Timeouts() OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceAvailabilitiesInput`<sup>Optional</sup> <a name="SoftwareSourceAvailabilitiesInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.softwareSourceAvailabilitiesInput"></a>

```go
func SoftwareSourceAvailabilitiesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

&osmanagementhubsoftwaresourcechangeavailabilitymanagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SoftwareSourceAvailabilities: interface{},
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.softwareSourceAvailabilities">SoftwareSourceAvailabilities</a></code> | <code>interface{}</code> | software_source_availabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SoftwareSourceAvailabilities`<sup>Required</sup> <a name="SoftwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.softwareSourceAvailabilities"></a>

```go
SoftwareSourceAvailabilities interface{}
```

- *Type:* interface{}

software_source_availabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_availabilities OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_availabilities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#id OsManagementHubSoftwareSourceChangeAvailabilityManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementConfig.property.timeouts"></a>

```go
Timeouts OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts">OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#timeouts OsManagementHubSoftwareSourceChangeAvailabilityManagement#timeouts}

---

### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

&osmanagementhubsoftwaresourcechangeavailabilitymanagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities {
	SoftwareSourceId: *string,
	Availability: *string,
	AvailabilityAtOci: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_id OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availability">Availability</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availabilityAtOci">AvailabilityAtOci</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability_at_oci OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability_at_oci}. |

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#software_source_id OsManagementHubSoftwareSourceChangeAvailabilityManagement#software_source_id}.

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availability"></a>

```go
Availability *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability}.

---

##### `AvailabilityAtOci`<sup>Optional</sup> <a name="AvailabilityAtOci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilities.property.availabilityAtOci"></a>

```go
AvailabilityAtOci *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#availability_at_oci OsManagementHubSoftwareSourceChangeAvailabilityManagement#availability_at_oci}.

---

### OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

&osmanagementhubsoftwaresourcechangeavailabilitymanagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#create OsManagementHubSoftwareSourceChangeAvailabilityManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#delete OsManagementHubSoftwareSourceChangeAvailabilityManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/os_management_hub_software_source_change_availability_management#update OsManagementHubSoftwareSourceChangeAvailabilityManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.NewOsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get"></a>

```go
func Get(index *f64) OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.NewOsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailabilityAtOci">ResetAvailabilityAtOci</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailability"></a>

```go
func ResetAvailability()
```

##### `ResetAvailabilityAtOci` <a name="ResetAvailabilityAtOci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.resetAvailabilityAtOci"></a>

```go
func ResetAvailabilityAtOci()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOciInput">AvailabilityAtOciInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availability">Availability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOci">AvailabilityAtOci</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityAtOciInput`<sup>Optional</sup> <a name="AvailabilityAtOciInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOciInput"></a>

```go
func AvailabilityAtOciInput() *string
```

- *Type:* *string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityInput"></a>

```go
func AvailabilityInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availability"></a>

```go
func Availability() *string
```

- *Type:* *string

---

##### `AvailabilityAtOci`<sup>Required</sup> <a name="AvailabilityAtOci" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.availabilityAtOci"></a>

```go
func AvailabilityAtOci() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementSoftwareSourceAvailabilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference <a name="OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/osmanagementhubsoftwaresourcechangeavailabilitymanagement"

osmanagementhubsoftwaresourcechangeavailabilitymanagement.NewOsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.osManagementHubSoftwareSourceChangeAvailabilityManagement.OsManagementHubSoftwareSourceChangeAvailabilityManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



