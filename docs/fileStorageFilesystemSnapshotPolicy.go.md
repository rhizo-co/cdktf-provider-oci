# `fileStorageFilesystemSnapshotPolicy` Submodule <a name="`fileStorageFilesystemSnapshotPolicy` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageFilesystemSnapshotPolicy <a name="FileStorageFilesystemSnapshotPolicy" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.NewFileStorageFilesystemSnapshotPolicy(scope Construct, id *string, config FileStorageFilesystemSnapshotPolicyConfig) FileStorageFilesystemSnapshotPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig">FileStorageFilesystemSnapshotPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig">FileStorageFilesystemSnapshotPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules">PutSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix">ResetPolicyPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules">ResetSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSchedules` <a name="PutSchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules"></a>

```go
func PutSchedules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts"></a>

```go
func PutTimeouts(value FileStorageFilesystemSnapshotPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetPolicyPrefix` <a name="ResetPolicyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix"></a>

```go
func ResetPolicyPrefix()
```

##### `ResetSchedules` <a name="ResetSchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules"></a>

```go
func ResetSchedules()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FileStorageFilesystemSnapshotPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FileStorageFilesystemSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageFilesystemSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules">Schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput">PolicyPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput">SchedulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix">PolicyPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks"></a>

```go
func Locks() FileStorageFilesystemSnapshotPolicyLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a>

---

##### `Schedules`<sup>Required</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules"></a>

```go
func Schedules() FileStorageFilesystemSnapshotPolicySchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts"></a>

```go
func Timeouts() FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyPrefixInput`<sup>Optional</sup> <a name="PolicyPrefixInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput"></a>

```go
func PolicyPrefixInput() *string
```

- *Type:* *string

---

##### `SchedulesInput`<sup>Optional</sup> <a name="SchedulesInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput"></a>

```go
func SchedulesInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

##### `PolicyPrefix`<sup>Required</sup> <a name="PolicyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix"></a>

```go
func PolicyPrefix() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageFilesystemSnapshotPolicyConfig <a name="FileStorageFilesystemSnapshotPolicyConfig" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

&filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsLockOverride: interface{},
	Locks: interface{},
	PolicyPrefix: *string,
	Schedules: interface{},
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix">PolicyPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules">Schedules</a></code> | <code>interface{}</code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#locks FileStorageFilesystemSnapshotPolicy#locks}

---

##### `PolicyPrefix`<sup>Optional</sup> <a name="PolicyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix"></a>

```go
PolicyPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}.

---

##### `Schedules`<sup>Optional</sup> <a name="Schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules"></a>

```go
Schedules interface{}
```

- *Type:* interface{}

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedules FileStorageFilesystemSnapshotPolicy#schedules}

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts"></a>

```go
Timeouts FileStorageFilesystemSnapshotPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#timeouts FileStorageFilesystemSnapshotPolicy#timeouts}

---

### FileStorageFilesystemSnapshotPolicyLocks <a name="FileStorageFilesystemSnapshotPolicyLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

&filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicyLocks {
	Type: *string,
	Message: *string,
	RelatedResourceId: *string,
	TimeCreated: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId"></a>

```go
RelatedResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated"></a>

```go
TimeCreated *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}.

---

### FileStorageFilesystemSnapshotPolicySchedules <a name="FileStorageFilesystemSnapshotPolicySchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

&filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicySchedules {
	Period: *string,
	TimeZone: *string,
	DayOfMonth: *f64,
	DayOfWeek: *string,
	HourOfDay: *f64,
	Month: *string,
	RetentionDurationInSeconds: *string,
	SchedulePrefix: *string,
	TimeScheduleStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period">Period</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone">TimeZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth">DayOfMonth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month">Month</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds">RetentionDurationInSeconds</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix">SchedulePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}. |

---

##### `Period`<sup>Required</sup> <a name="Period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period"></a>

```go
Period *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}.

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}.

---

##### `DayOfMonth`<sup>Optional</sup> <a name="DayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth"></a>

```go
DayOfMonth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}.

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}.

---

##### `HourOfDay`<sup>Optional</sup> <a name="HourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay"></a>

```go
HourOfDay *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}.

---

##### `Month`<sup>Optional</sup> <a name="Month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month"></a>

```go
Month *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}.

---

##### `RetentionDurationInSeconds`<sup>Optional</sup> <a name="RetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds"></a>

```go
RetentionDurationInSeconds *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}.

---

##### `SchedulePrefix`<sup>Optional</sup> <a name="SchedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix"></a>

```go
SchedulePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}.

---

##### `TimeScheduleStart`<sup>Optional</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart"></a>

```go
TimeScheduleStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}.

---

### FileStorageFilesystemSnapshotPolicyTimeouts <a name="FileStorageFilesystemSnapshotPolicyTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

&filestoragefilesystemsnapshotpolicy.FileStorageFilesystemSnapshotPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageFilesystemSnapshotPolicyLocksList <a name="FileStorageFilesystemSnapshotPolicyLocksList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.NewFileStorageFilesystemSnapshotPolicyLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FileStorageFilesystemSnapshotPolicyLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get"></a>

```go
func Get(index *f64) FileStorageFilesystemSnapshotPolicyLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FileStorageFilesystemSnapshotPolicyLocksOutputReference <a name="FileStorageFilesystemSnapshotPolicyLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.NewFileStorageFilesystemSnapshotPolicyLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FileStorageFilesystemSnapshotPolicyLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId"></a>

```go
func ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated"></a>

```go
func ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput"></a>

```go
func RelatedResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput"></a>

```go
func TimeCreatedInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FileStorageFilesystemSnapshotPolicySchedulesList <a name="FileStorageFilesystemSnapshotPolicySchedulesList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.NewFileStorageFilesystemSnapshotPolicySchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FileStorageFilesystemSnapshotPolicySchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get"></a>

```go
func Get(index *f64) FileStorageFilesystemSnapshotPolicySchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FileStorageFilesystemSnapshotPolicySchedulesOutputReference <a name="FileStorageFilesystemSnapshotPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.NewFileStorageFilesystemSnapshotPolicySchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FileStorageFilesystemSnapshotPolicySchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth">ResetDayOfMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay">ResetHourOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds">ResetRetentionDurationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix">ResetSchedulePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart">ResetTimeScheduleStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfMonth` <a name="ResetDayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth"></a>

```go
func ResetDayOfMonth()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek"></a>

```go
func ResetDayOfWeek()
```

##### `ResetHourOfDay` <a name="ResetHourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay"></a>

```go
func ResetHourOfDay()
```

##### `ResetMonth` <a name="ResetMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetRetentionDurationInSeconds` <a name="ResetRetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds"></a>

```go
func ResetRetentionDurationInSeconds()
```

##### `ResetSchedulePrefix` <a name="ResetSchedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix"></a>

```go
func ResetSchedulePrefix()
```

##### `ResetTimeScheduleStart` <a name="ResetTimeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart"></a>

```go
func ResetTimeScheduleStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput">HourOfDayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput">MonthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput">RetentionDurationInSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput">SchedulePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput">TimeScheduleStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay">HourOfDay</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month">Month</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds">RetentionDurationInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix">SchedulePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart">TimeScheduleStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput"></a>

```go
func DayOfMonthInput() *f64
```

- *Type:* *f64

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `HourOfDayInput`<sup>Optional</sup> <a name="HourOfDayInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput"></a>

```go
func HourOfDayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput"></a>

```go
func MonthInput() *string
```

- *Type:* *string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `RetentionDurationInSecondsInput`<sup>Optional</sup> <a name="RetentionDurationInSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput"></a>

```go
func RetentionDurationInSecondsInput() *string
```

- *Type:* *string

---

##### `SchedulePrefixInput`<sup>Optional</sup> <a name="SchedulePrefixInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput"></a>

```go
func SchedulePrefixInput() *string
```

- *Type:* *string

---

##### `TimeScheduleStartInput`<sup>Optional</sup> <a name="TimeScheduleStartInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput"></a>

```go
func TimeScheduleStartInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth"></a>

```go
func DayOfMonth() *f64
```

- *Type:* *f64

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `HourOfDay`<sup>Required</sup> <a name="HourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay"></a>

```go
func HourOfDay() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month"></a>

```go
func Month() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `RetentionDurationInSeconds`<sup>Required</sup> <a name="RetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds"></a>

```go
func RetentionDurationInSeconds() *string
```

- *Type:* *string

---

##### `SchedulePrefix`<sup>Required</sup> <a name="SchedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix"></a>

```go
func SchedulePrefix() *string
```

- *Type:* *string

---

##### `TimeScheduleStart`<sup>Required</sup> <a name="TimeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart"></a>

```go
func TimeScheduleStart() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference <a name="FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragefilesystemsnapshotpolicy"

filestoragefilesystemsnapshotpolicy.NewFileStorageFilesystemSnapshotPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



