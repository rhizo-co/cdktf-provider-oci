# `fileStorageMountTarget` Submodule <a name="`fileStorageMountTarget` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageMountTarget <a name="FileStorageMountTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target oci_file_storage_mount_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.NewFileStorageMountTarget(scope Construct, id *string, config FileStorageMountTargetConfig) FileStorageMountTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig">FileStorageMountTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig">FileStorageMountTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos">PutKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap">PutLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel">ResetHostnameLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType">ResetIdmapType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos">ResetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap">ResetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput">ResetRequestedThroughput</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKerberos` <a name="PutKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos"></a>

```go
func PutKerberos(value FileStorageMountTargetKerberos)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putKerberos.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `PutLdapIdmap` <a name="PutLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap"></a>

```go
func PutLdapIdmap(value FileStorageMountTargetLdapIdmap)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLdapIdmap.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts"></a>

```go
func PutTimeouts(value FileStorageMountTargetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHostnameLabel` <a name="ResetHostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetHostnameLabel"></a>

```go
func ResetHostnameLabel()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetId"></a>

```go
func ResetId()
```

##### `ResetIdmapType` <a name="ResetIdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIdmapType"></a>

```go
func ResetIdmapType()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetKerberos` <a name="ResetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetKerberos"></a>

```go
func ResetKerberos()
```

##### `ResetLdapIdmap` <a name="ResetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLdapIdmap"></a>

```go
func ResetLdapIdmap()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetRequestedThroughput` <a name="ResetRequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetRequestedThroughput"></a>

```go
func ResetRequestedThroughput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.FileStorageMountTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.FileStorageMountTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.FileStorageMountTarget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.FileStorageMountTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FileStorageMountTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FileStorageMountTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FileStorageMountTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageMountTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId">ExportSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos">Kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap">LdapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput">ObservedThroughput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds">PrivateIpIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity">ReservedStorageCapacity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd">TimeBillingCycleEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput">HostnameLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput">IdmapTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput">KerberosInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput">LdapIdmapInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput">RequestedThroughputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType">IdmapType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput">RequestedThroughput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExportSetId`<sup>Required</sup> <a name="ExportSetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.exportSetId"></a>

```go
func ExportSetId() *string
```

- *Type:* *string

---

##### `Kerberos`<sup>Required</sup> <a name="Kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberos"></a>

```go
func Kerberos() FileStorageMountTargetKerberosOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference">FileStorageMountTargetKerberosOutputReference</a>

---

##### `LdapIdmap`<sup>Required</sup> <a name="LdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmap"></a>

```go
func LdapIdmap() FileStorageMountTargetLdapIdmapOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference">FileStorageMountTargetLdapIdmapOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locks"></a>

```go
func Locks() FileStorageMountTargetLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList">FileStorageMountTargetLocksList</a>

---

##### `ObservedThroughput`<sup>Required</sup> <a name="ObservedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.observedThroughput"></a>

```go
func ObservedThroughput() *string
```

- *Type:* *string

---

##### `PrivateIpIds`<sup>Required</sup> <a name="PrivateIpIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.privateIpIds"></a>

```go
func PrivateIpIds() *[]*string
```

- *Type:* *[]*string

---

##### `ReservedStorageCapacity`<sup>Required</sup> <a name="ReservedStorageCapacity" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.reservedStorageCapacity"></a>

```go
func ReservedStorageCapacity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeBillingCycleEnd`<sup>Required</sup> <a name="TimeBillingCycleEnd" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeBillingCycleEnd"></a>

```go
func TimeBillingCycleEnd() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeouts"></a>

```go
func Timeouts() FileStorageMountTargetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference">FileStorageMountTargetTimeoutsOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabelInput`<sup>Optional</sup> <a name="HostnameLabelInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabelInput"></a>

```go
func HostnameLabelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdmapTypeInput`<sup>Optional</sup> <a name="IdmapTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapTypeInput"></a>

```go
func IdmapTypeInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `KerberosInput`<sup>Optional</sup> <a name="KerberosInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.kerberosInput"></a>

```go
func KerberosInput() FileStorageMountTargetKerberos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---

##### `LdapIdmapInput`<sup>Optional</sup> <a name="LdapIdmapInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ldapIdmapInput"></a>

```go
func LdapIdmapInput() FileStorageMountTargetLdapIdmap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequestedThroughputInput`<sup>Optional</sup> <a name="RequestedThroughputInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughputInput"></a>

```go
func RequestedThroughputInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdmapType`<sup>Required</sup> <a name="IdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.idmapType"></a>

```go
func IdmapType() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `RequestedThroughput`<sup>Required</sup> <a name="RequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.requestedThroughput"></a>

```go
func RequestedThroughput() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageMountTargetConfig <a name="FileStorageMountTargetConfig" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

&filestoragemounttarget.FileStorageMountTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AvailabilityDomain: *string,
	CompartmentId: *string,
	SubnetId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	HostnameLabel: *string,
	Id: *string,
	IdmapType: *string,
	IpAddress: *string,
	IsLockOverride: interface{},
	Kerberos: github.com/rhizo-co/cdktf-provider-oci-go/oci.fileStorageMountTarget.FileStorageMountTargetKerberos,
	LdapIdmap: github.com/rhizo-co/cdktf-provider-oci-go/oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap,
	Locks: interface{},
	NsgIds: *[]*string,
	RequestedThroughput: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.fileStorageMountTarget.FileStorageMountTargetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType">IdmapType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos">Kerberos</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | kerberos block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap">LdapIdmap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | ldap_idmap block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput">RequestedThroughput</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#availability_domain FileStorageMountTarget#availability_domain}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#compartment_id FileStorageMountTarget#compartment_id}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#subnet_id FileStorageMountTarget#subnet_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#defined_tags FileStorageMountTarget#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#display_name FileStorageMountTarget#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#freeform_tags FileStorageMountTarget#freeform_tags}.

---

##### `HostnameLabel`<sup>Optional</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.hostnameLabel"></a>

```go
HostnameLabel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#hostname_label FileStorageMountTarget#hostname_label}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#id FileStorageMountTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdmapType`<sup>Optional</sup> <a name="IdmapType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.idmapType"></a>

```go
IdmapType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#idmap_type FileStorageMountTarget#idmap_type}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ip_address FileStorageMountTarget#ip_address}.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_lock_override FileStorageMountTarget#is_lock_override}.

---

##### `Kerberos`<sup>Optional</sup> <a name="Kerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.kerberos"></a>

```go
Kerberos FileStorageMountTargetKerberos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

kerberos block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos FileStorageMountTarget#kerberos}

---

##### `LdapIdmap`<sup>Optional</sup> <a name="LdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.ldapIdmap"></a>

```go
LdapIdmap FileStorageMountTargetLdapIdmap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

ldap_idmap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#ldap_idmap FileStorageMountTarget#ldap_idmap}

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#locks FileStorageMountTarget#locks}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#nsg_ids FileStorageMountTarget#nsg_ids}.

---

##### `RequestedThroughput`<sup>Optional</sup> <a name="RequestedThroughput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.requestedThroughput"></a>

```go
RequestedThroughput *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#requested_throughput FileStorageMountTarget#requested_throughput}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetConfig.property.timeouts"></a>

```go
Timeouts FileStorageMountTargetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts">FileStorageMountTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#timeouts FileStorageMountTarget#timeouts}

---

### FileStorageMountTargetKerberos <a name="FileStorageMountTargetKerberos" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

&filestoragemounttarget.FileStorageMountTargetKerberos {
	KerberosRealm: *string,
	BackupKeyTabSecretVersion: *f64,
	CurrentKeyTabSecretVersion: *f64,
	IsKerberosEnabled: interface{},
	KeyTabSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm">KerberosRealm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion">BackupKeyTabSecretVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion">CurrentKeyTabSecretVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled">IsKerberosEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId">KeyTabSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}. |

---

##### `KerberosRealm`<sup>Required</sup> <a name="KerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.kerberosRealm"></a>

```go
KerberosRealm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#kerberos_realm FileStorageMountTarget#kerberos_realm}.

---

##### `BackupKeyTabSecretVersion`<sup>Optional</sup> <a name="BackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.backupKeyTabSecretVersion"></a>

```go
BackupKeyTabSecretVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#backup_key_tab_secret_version FileStorageMountTarget#backup_key_tab_secret_version}.

---

##### `CurrentKeyTabSecretVersion`<sup>Optional</sup> <a name="CurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.currentKeyTabSecretVersion"></a>

```go
CurrentKeyTabSecretVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#current_key_tab_secret_version FileStorageMountTarget#current_key_tab_secret_version}.

---

##### `IsKerberosEnabled`<sup>Optional</sup> <a name="IsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.isKerberosEnabled"></a>

```go
IsKerberosEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#is_kerberos_enabled FileStorageMountTarget#is_kerberos_enabled}.

---

##### `KeyTabSecretId`<sup>Optional</sup> <a name="KeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos.property.keyTabSecretId"></a>

```go
KeyTabSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#key_tab_secret_id FileStorageMountTarget#key_tab_secret_id}.

---

### FileStorageMountTargetLdapIdmap <a name="FileStorageMountTargetLdapIdmap" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

&filestoragemounttarget.FileStorageMountTargetLdapIdmap {
	CacheLifetimeSeconds: *f64,
	CacheRefreshIntervalSeconds: *f64,
	GroupSearchBase: *string,
	NegativeCacheLifetimeSeconds: *f64,
	OutboundConnector1Id: *string,
	OutboundConnector2Id: *string,
	SchemaType: *string,
	UserSearchBase: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds">CacheLifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds">CacheRefreshIntervalSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase">GroupSearchBase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds">NegativeCacheLifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id">OutboundConnector1Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id">OutboundConnector2Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType">SchemaType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase">UserSearchBase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}. |

---

##### `CacheLifetimeSeconds`<sup>Optional</sup> <a name="CacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheLifetimeSeconds"></a>

```go
CacheLifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_lifetime_seconds FileStorageMountTarget#cache_lifetime_seconds}.

---

##### `CacheRefreshIntervalSeconds`<sup>Optional</sup> <a name="CacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.cacheRefreshIntervalSeconds"></a>

```go
CacheRefreshIntervalSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#cache_refresh_interval_seconds FileStorageMountTarget#cache_refresh_interval_seconds}.

---

##### `GroupSearchBase`<sup>Optional</sup> <a name="GroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.groupSearchBase"></a>

```go
GroupSearchBase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#group_search_base FileStorageMountTarget#group_search_base}.

---

##### `NegativeCacheLifetimeSeconds`<sup>Optional</sup> <a name="NegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.negativeCacheLifetimeSeconds"></a>

```go
NegativeCacheLifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#negative_cache_lifetime_seconds FileStorageMountTarget#negative_cache_lifetime_seconds}.

---

##### `OutboundConnector1Id`<sup>Optional</sup> <a name="OutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector1Id"></a>

```go
OutboundConnector1Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector1id FileStorageMountTarget#outbound_connector1id}.

---

##### `OutboundConnector2Id`<sup>Optional</sup> <a name="OutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.outboundConnector2Id"></a>

```go
OutboundConnector2Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#outbound_connector2id FileStorageMountTarget#outbound_connector2id}.

---

##### `SchemaType`<sup>Optional</sup> <a name="SchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.schemaType"></a>

```go
SchemaType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#schema_type FileStorageMountTarget#schema_type}.

---

##### `UserSearchBase`<sup>Optional</sup> <a name="UserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap.property.userSearchBase"></a>

```go
UserSearchBase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#user_search_base FileStorageMountTarget#user_search_base}.

---

### FileStorageMountTargetLocks <a name="FileStorageMountTargetLocks" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

&filestoragemounttarget.FileStorageMountTargetLocks {
	Type: *string,
	Message: *string,
	RelatedResourceId: *string,
	TimeCreated: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#type FileStorageMountTarget#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#message FileStorageMountTarget#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.relatedResourceId"></a>

```go
RelatedResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#related_resource_id FileStorageMountTarget#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocks.property.timeCreated"></a>

```go
TimeCreated *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#time_created FileStorageMountTarget#time_created}.

---

### FileStorageMountTargetTimeouts <a name="FileStorageMountTargetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

&filestoragemounttarget.FileStorageMountTargetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#create FileStorageMountTarget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#delete FileStorageMountTarget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_mount_target#update FileStorageMountTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageMountTargetKerberosOutputReference <a name="FileStorageMountTargetKerberosOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.NewFileStorageMountTargetKerberosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FileStorageMountTargetKerberosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion">ResetBackupKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion">ResetCurrentKeyTabSecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled">ResetIsKerberosEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId">ResetKeyTabSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupKeyTabSecretVersion` <a name="ResetBackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetBackupKeyTabSecretVersion"></a>

```go
func ResetBackupKeyTabSecretVersion()
```

##### `ResetCurrentKeyTabSecretVersion` <a name="ResetCurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetCurrentKeyTabSecretVersion"></a>

```go
func ResetCurrentKeyTabSecretVersion()
```

##### `ResetIsKerberosEnabled` <a name="ResetIsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetIsKerberosEnabled"></a>

```go
func ResetIsKerberosEnabled()
```

##### `ResetKeyTabSecretId` <a name="ResetKeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.resetKeyTabSecretId"></a>

```go
func ResetKeyTabSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput">BackupKeyTabSecretVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput">CurrentKeyTabSecretVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput">IsKerberosEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput">KerberosRealmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput">KeyTabSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion">BackupKeyTabSecretVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion">CurrentKeyTabSecretVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled">IsKerberosEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm">KerberosRealm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId">KeyTabSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupKeyTabSecretVersionInput`<sup>Optional</sup> <a name="BackupKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersionInput"></a>

```go
func BackupKeyTabSecretVersionInput() *f64
```

- *Type:* *f64

---

##### `CurrentKeyTabSecretVersionInput`<sup>Optional</sup> <a name="CurrentKeyTabSecretVersionInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersionInput"></a>

```go
func CurrentKeyTabSecretVersionInput() *f64
```

- *Type:* *f64

---

##### `IsKerberosEnabledInput`<sup>Optional</sup> <a name="IsKerberosEnabledInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabledInput"></a>

```go
func IsKerberosEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KerberosRealmInput`<sup>Optional</sup> <a name="KerberosRealmInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealmInput"></a>

```go
func KerberosRealmInput() *string
```

- *Type:* *string

---

##### `KeyTabSecretIdInput`<sup>Optional</sup> <a name="KeyTabSecretIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretIdInput"></a>

```go
func KeyTabSecretIdInput() *string
```

- *Type:* *string

---

##### `BackupKeyTabSecretVersion`<sup>Required</sup> <a name="BackupKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.backupKeyTabSecretVersion"></a>

```go
func BackupKeyTabSecretVersion() *f64
```

- *Type:* *f64

---

##### `CurrentKeyTabSecretVersion`<sup>Required</sup> <a name="CurrentKeyTabSecretVersion" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.currentKeyTabSecretVersion"></a>

```go
func CurrentKeyTabSecretVersion() *f64
```

- *Type:* *f64

---

##### `IsKerberosEnabled`<sup>Required</sup> <a name="IsKerberosEnabled" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.isKerberosEnabled"></a>

```go
func IsKerberosEnabled() interface{}
```

- *Type:* interface{}

---

##### `KerberosRealm`<sup>Required</sup> <a name="KerberosRealm" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.kerberosRealm"></a>

```go
func KerberosRealm() *string
```

- *Type:* *string

---

##### `KeyTabSecretId`<sup>Required</sup> <a name="KeyTabSecretId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.keyTabSecretId"></a>

```go
func KeyTabSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberosOutputReference.property.internalValue"></a>

```go
func InternalValue() FileStorageMountTargetKerberos
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetKerberos">FileStorageMountTargetKerberos</a>

---


### FileStorageMountTargetLdapIdmapOutputReference <a name="FileStorageMountTargetLdapIdmapOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.NewFileStorageMountTargetLdapIdmapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FileStorageMountTargetLdapIdmapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds">ResetCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds">ResetCacheRefreshIntervalSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase">ResetGroupSearchBase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds">ResetNegativeCacheLifetimeSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id">ResetOutboundConnector1Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id">ResetOutboundConnector2Id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType">ResetSchemaType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase">ResetUserSearchBase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheLifetimeSeconds` <a name="ResetCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheLifetimeSeconds"></a>

```go
func ResetCacheLifetimeSeconds()
```

##### `ResetCacheRefreshIntervalSeconds` <a name="ResetCacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetCacheRefreshIntervalSeconds"></a>

```go
func ResetCacheRefreshIntervalSeconds()
```

##### `ResetGroupSearchBase` <a name="ResetGroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetGroupSearchBase"></a>

```go
func ResetGroupSearchBase()
```

##### `ResetNegativeCacheLifetimeSeconds` <a name="ResetNegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetNegativeCacheLifetimeSeconds"></a>

```go
func ResetNegativeCacheLifetimeSeconds()
```

##### `ResetOutboundConnector1Id` <a name="ResetOutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector1Id"></a>

```go
func ResetOutboundConnector1Id()
```

##### `ResetOutboundConnector2Id` <a name="ResetOutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetOutboundConnector2Id"></a>

```go
func ResetOutboundConnector2Id()
```

##### `ResetSchemaType` <a name="ResetSchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetSchemaType"></a>

```go
func ResetSchemaType()
```

##### `ResetUserSearchBase` <a name="ResetUserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.resetUserSearchBase"></a>

```go
func ResetUserSearchBase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput">CacheLifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput">CacheRefreshIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput">GroupSearchBaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput">NegativeCacheLifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput">OutboundConnector1IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput">OutboundConnector2IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput">SchemaTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput">UserSearchBaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds">CacheLifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds">CacheRefreshIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase">GroupSearchBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds">NegativeCacheLifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id">OutboundConnector1Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id">OutboundConnector2Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType">SchemaType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase">UserSearchBase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheLifetimeSecondsInput`<sup>Optional</sup> <a name="CacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSecondsInput"></a>

```go
func CacheLifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `CacheRefreshIntervalSecondsInput`<sup>Optional</sup> <a name="CacheRefreshIntervalSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSecondsInput"></a>

```go
func CacheRefreshIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `GroupSearchBaseInput`<sup>Optional</sup> <a name="GroupSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBaseInput"></a>

```go
func GroupSearchBaseInput() *string
```

- *Type:* *string

---

##### `NegativeCacheLifetimeSecondsInput`<sup>Optional</sup> <a name="NegativeCacheLifetimeSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSecondsInput"></a>

```go
func NegativeCacheLifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `OutboundConnector1IdInput`<sup>Optional</sup> <a name="OutboundConnector1IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1IdInput"></a>

```go
func OutboundConnector1IdInput() *string
```

- *Type:* *string

---

##### `OutboundConnector2IdInput`<sup>Optional</sup> <a name="OutboundConnector2IdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2IdInput"></a>

```go
func OutboundConnector2IdInput() *string
```

- *Type:* *string

---

##### `SchemaTypeInput`<sup>Optional</sup> <a name="SchemaTypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaTypeInput"></a>

```go
func SchemaTypeInput() *string
```

- *Type:* *string

---

##### `UserSearchBaseInput`<sup>Optional</sup> <a name="UserSearchBaseInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBaseInput"></a>

```go
func UserSearchBaseInput() *string
```

- *Type:* *string

---

##### `CacheLifetimeSeconds`<sup>Required</sup> <a name="CacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheLifetimeSeconds"></a>

```go
func CacheLifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `CacheRefreshIntervalSeconds`<sup>Required</sup> <a name="CacheRefreshIntervalSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.cacheRefreshIntervalSeconds"></a>

```go
func CacheRefreshIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `GroupSearchBase`<sup>Required</sup> <a name="GroupSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.groupSearchBase"></a>

```go
func GroupSearchBase() *string
```

- *Type:* *string

---

##### `NegativeCacheLifetimeSeconds`<sup>Required</sup> <a name="NegativeCacheLifetimeSeconds" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.negativeCacheLifetimeSeconds"></a>

```go
func NegativeCacheLifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `OutboundConnector1Id`<sup>Required</sup> <a name="OutboundConnector1Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector1Id"></a>

```go
func OutboundConnector1Id() *string
```

- *Type:* *string

---

##### `OutboundConnector2Id`<sup>Required</sup> <a name="OutboundConnector2Id" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.outboundConnector2Id"></a>

```go
func OutboundConnector2Id() *string
```

- *Type:* *string

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.schemaType"></a>

```go
func SchemaType() *string
```

- *Type:* *string

---

##### `UserSearchBase`<sup>Required</sup> <a name="UserSearchBase" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.userSearchBase"></a>

```go
func UserSearchBase() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmapOutputReference.property.internalValue"></a>

```go
func InternalValue() FileStorageMountTargetLdapIdmap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLdapIdmap">FileStorageMountTargetLdapIdmap</a>

---


### FileStorageMountTargetLocksList <a name="FileStorageMountTargetLocksList" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.NewFileStorageMountTargetLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FileStorageMountTargetLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get"></a>

```go
func Get(index *f64) FileStorageMountTargetLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FileStorageMountTargetLocksOutputReference <a name="FileStorageMountTargetLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.NewFileStorageMountTargetLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FileStorageMountTargetLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetRelatedResourceId"></a>

```go
func ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.resetTimeCreated"></a>

```go
func ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceIdInput"></a>

```go
func RelatedResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreatedInput"></a>

```go
func TimeCreatedInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FileStorageMountTargetTimeoutsOutputReference <a name="FileStorageMountTargetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/filestoragemounttarget"

filestoragemounttarget.NewFileStorageMountTargetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FileStorageMountTargetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fileStorageMountTarget.FileStorageMountTargetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



