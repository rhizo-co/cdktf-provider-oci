# `mediaServicesStreamCdnConfig` Submodule <a name="`mediaServicesStreamCdnConfig` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesStreamCdnConfig <a name="MediaServicesStreamCdnConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.NewMediaServicesStreamCdnConfig(scope Construct, id *string, config MediaServicesStreamCdnConfigConfig) MediaServicesStreamCdnConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig">MediaServicesStreamCdnConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig">MediaServicesStreamCdnConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig"></a>

```go
func PutConfig(value MediaServicesStreamCdnConfigConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts"></a>

```go
func PutTimeouts(value MediaServicesStreamCdnConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsEnabled"></a>

```go
func ResetIsEnabled()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaServicesStreamCdnConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaServicesStreamCdnConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesStreamCdnConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails">LifecyleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput">ConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput">DistributionChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.config"></a>

```go
func Config() MediaServicesStreamCdnConfigConfigAOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference">MediaServicesStreamCdnConfigConfigAOutputReference</a>

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.lifecyleDetails"></a>

```go
func LifecyleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locks"></a>

```go
func Locks() MediaServicesStreamCdnConfigLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList">MediaServicesStreamCdnConfigLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeouts"></a>

```go
func Timeouts() MediaServicesStreamCdnConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference">MediaServicesStreamCdnConfigTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.configInput"></a>

```go
func ConfigInput() MediaServicesStreamCdnConfigConfigA
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DistributionChannelIdInput`<sup>Optional</sup> <a name="DistributionChannelIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelIdInput"></a>

```go
func DistributionChannelIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.distributionChannelId"></a>

```go
func DistributionChannelId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesStreamCdnConfigConfig <a name="MediaServicesStreamCdnConfigConfig" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

&mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/rhizo-co/cdktf-provider-oci-go/oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA,
	DisplayName: *string,
	DistributionChannelId: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsEnabled: interface{},
	IsLockOverride: interface{},
	Locks: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId">DistributionChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.config"></a>

```go
Config MediaServicesStreamCdnConfigConfigA
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#config MediaServicesStreamCdnConfig#config}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#display_name MediaServicesStreamCdnConfig#display_name}.

---

##### `DistributionChannelId`<sup>Required</sup> <a name="DistributionChannelId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.distributionChannelId"></a>

```go
DistributionChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#distribution_channel_id MediaServicesStreamCdnConfig#distribution_channel_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#defined_tags MediaServicesStreamCdnConfig#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#freeform_tags MediaServicesStreamCdnConfig#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#id MediaServicesStreamCdnConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_enabled MediaServicesStreamCdnConfig#is_enabled}.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_lock_override MediaServicesStreamCdnConfig#is_lock_override}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#locks MediaServicesStreamCdnConfig#locks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfig.property.timeouts"></a>

```go
Timeouts MediaServicesStreamCdnConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts">MediaServicesStreamCdnConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#timeouts MediaServicesStreamCdnConfig#timeouts}

---

### MediaServicesStreamCdnConfigConfigA <a name="MediaServicesStreamCdnConfigConfigA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

&mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfigConfigA {
	Type: *string,
	EdgeHostname: *string,
	EdgePathPrefix: *string,
	EdgeTokenKey: *string,
	EdgeTokenSalt: *string,
	IsEdgeTokenAuth: interface{},
	OriginAuthSecretKeyA: *string,
	OriginAuthSecretKeyB: *string,
	OriginAuthSecretKeyNonceA: *string,
	OriginAuthSecretKeyNonceB: *string,
	OriginAuthSignEncryption: *string,
	OriginAuthSignType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname">EdgeHostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix">EdgePathPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey">EdgeTokenKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt">EdgeTokenSalt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth">IsEdgeTokenAuth</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA">OriginAuthSecretKeyA</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB">OriginAuthSecretKeyB</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA">OriginAuthSecretKeyNonceA</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB">OriginAuthSecretKeyNonceB</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption">OriginAuthSignEncryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType">OriginAuthSignType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `EdgeHostname`<sup>Optional</sup> <a name="EdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeHostname"></a>

```go
EdgeHostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_hostname MediaServicesStreamCdnConfig#edge_hostname}.

---

##### `EdgePathPrefix`<sup>Optional</sup> <a name="EdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgePathPrefix"></a>

```go
EdgePathPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_path_prefix MediaServicesStreamCdnConfig#edge_path_prefix}.

---

##### `EdgeTokenKey`<sup>Optional</sup> <a name="EdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenKey"></a>

```go
EdgeTokenKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_key MediaServicesStreamCdnConfig#edge_token_key}.

---

##### `EdgeTokenSalt`<sup>Optional</sup> <a name="EdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.edgeTokenSalt"></a>

```go
EdgeTokenSalt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#edge_token_salt MediaServicesStreamCdnConfig#edge_token_salt}.

---

##### `IsEdgeTokenAuth`<sup>Optional</sup> <a name="IsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.isEdgeTokenAuth"></a>

```go
IsEdgeTokenAuth interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#is_edge_token_auth MediaServicesStreamCdnConfig#is_edge_token_auth}.

---

##### `OriginAuthSecretKeyA`<sup>Optional</sup> <a name="OriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyA"></a>

```go
OriginAuthSecretKeyA *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_a MediaServicesStreamCdnConfig#origin_auth_secret_key_a}.

---

##### `OriginAuthSecretKeyB`<sup>Optional</sup> <a name="OriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyB"></a>

```go
OriginAuthSecretKeyB *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_b MediaServicesStreamCdnConfig#origin_auth_secret_key_b}.

---

##### `OriginAuthSecretKeyNonceA`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceA"></a>

```go
OriginAuthSecretKeyNonceA *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_a MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_a}.

---

##### `OriginAuthSecretKeyNonceB`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSecretKeyNonceB"></a>

```go
OriginAuthSecretKeyNonceB *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_secret_key_nonce_b MediaServicesStreamCdnConfig#origin_auth_secret_key_nonce_b}.

---

##### `OriginAuthSignEncryption`<sup>Optional</sup> <a name="OriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignEncryption"></a>

```go
OriginAuthSignEncryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_encryption MediaServicesStreamCdnConfig#origin_auth_sign_encryption}.

---

##### `OriginAuthSignType`<sup>Optional</sup> <a name="OriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA.property.originAuthSignType"></a>

```go
OriginAuthSignType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#origin_auth_sign_type MediaServicesStreamCdnConfig#origin_auth_sign_type}.

---

### MediaServicesStreamCdnConfigLocks <a name="MediaServicesStreamCdnConfigLocks" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

&mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfigLocks {
	CompartmentId: *string,
	Type: *string,
	Message: *string,
	RelatedResourceId: *string,
	TimeCreated: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}. |

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#compartment_id MediaServicesStreamCdnConfig#compartment_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#type MediaServicesStreamCdnConfig#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#message MediaServicesStreamCdnConfig#message}.

---

##### `RelatedResourceId`<sup>Optional</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.relatedResourceId"></a>

```go
RelatedResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#related_resource_id MediaServicesStreamCdnConfig#related_resource_id}.

---

##### `TimeCreated`<sup>Optional</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocks.property.timeCreated"></a>

```go
TimeCreated *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#time_created MediaServicesStreamCdnConfig#time_created}.

---

### MediaServicesStreamCdnConfigTimeouts <a name="MediaServicesStreamCdnConfigTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

&mediaservicesstreamcdnconfig.MediaServicesStreamCdnConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#create MediaServicesStreamCdnConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#delete MediaServicesStreamCdnConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_stream_cdn_config#update MediaServicesStreamCdnConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesStreamCdnConfigConfigAOutputReference <a name="MediaServicesStreamCdnConfigConfigAOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.NewMediaServicesStreamCdnConfigConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaServicesStreamCdnConfigConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname">ResetEdgeHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix">ResetEdgePathPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey">ResetEdgeTokenKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt">ResetEdgeTokenSalt</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth">ResetIsEdgeTokenAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA">ResetOriginAuthSecretKeyA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB">ResetOriginAuthSecretKeyB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA">ResetOriginAuthSecretKeyNonceA</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB">ResetOriginAuthSecretKeyNonceB</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption">ResetOriginAuthSignEncryption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType">ResetOriginAuthSignType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEdgeHostname` <a name="ResetEdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeHostname"></a>

```go
func ResetEdgeHostname()
```

##### `ResetEdgePathPrefix` <a name="ResetEdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgePathPrefix"></a>

```go
func ResetEdgePathPrefix()
```

##### `ResetEdgeTokenKey` <a name="ResetEdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenKey"></a>

```go
func ResetEdgeTokenKey()
```

##### `ResetEdgeTokenSalt` <a name="ResetEdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetEdgeTokenSalt"></a>

```go
func ResetEdgeTokenSalt()
```

##### `ResetIsEdgeTokenAuth` <a name="ResetIsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetIsEdgeTokenAuth"></a>

```go
func ResetIsEdgeTokenAuth()
```

##### `ResetOriginAuthSecretKeyA` <a name="ResetOriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyA"></a>

```go
func ResetOriginAuthSecretKeyA()
```

##### `ResetOriginAuthSecretKeyB` <a name="ResetOriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyB"></a>

```go
func ResetOriginAuthSecretKeyB()
```

##### `ResetOriginAuthSecretKeyNonceA` <a name="ResetOriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceA"></a>

```go
func ResetOriginAuthSecretKeyNonceA()
```

##### `ResetOriginAuthSecretKeyNonceB` <a name="ResetOriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSecretKeyNonceB"></a>

```go
func ResetOriginAuthSecretKeyNonceB()
```

##### `ResetOriginAuthSignEncryption` <a name="ResetOriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignEncryption"></a>

```go
func ResetOriginAuthSignEncryption()
```

##### `ResetOriginAuthSignType` <a name="ResetOriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.resetOriginAuthSignType"></a>

```go
func ResetOriginAuthSignType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput">EdgeHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput">EdgePathPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput">EdgeTokenKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput">EdgeTokenSaltInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput">IsEdgeTokenAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput">OriginAuthSecretKeyAInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput">OriginAuthSecretKeyBInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput">OriginAuthSecretKeyNonceAInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput">OriginAuthSecretKeyNonceBInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput">OriginAuthSignEncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput">OriginAuthSignTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname">EdgeHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix">EdgePathPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey">EdgeTokenKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt">EdgeTokenSalt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth">IsEdgeTokenAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA">OriginAuthSecretKeyA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB">OriginAuthSecretKeyB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA">OriginAuthSecretKeyNonceA</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB">OriginAuthSecretKeyNonceB</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption">OriginAuthSignEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType">OriginAuthSignType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EdgeHostnameInput`<sup>Optional</sup> <a name="EdgeHostnameInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostnameInput"></a>

```go
func EdgeHostnameInput() *string
```

- *Type:* *string

---

##### `EdgePathPrefixInput`<sup>Optional</sup> <a name="EdgePathPrefixInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefixInput"></a>

```go
func EdgePathPrefixInput() *string
```

- *Type:* *string

---

##### `EdgeTokenKeyInput`<sup>Optional</sup> <a name="EdgeTokenKeyInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKeyInput"></a>

```go
func EdgeTokenKeyInput() *string
```

- *Type:* *string

---

##### `EdgeTokenSaltInput`<sup>Optional</sup> <a name="EdgeTokenSaltInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSaltInput"></a>

```go
func EdgeTokenSaltInput() *string
```

- *Type:* *string

---

##### `IsEdgeTokenAuthInput`<sup>Optional</sup> <a name="IsEdgeTokenAuthInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuthInput"></a>

```go
func IsEdgeTokenAuthInput() interface{}
```

- *Type:* interface{}

---

##### `OriginAuthSecretKeyAInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyAInput"></a>

```go
func OriginAuthSecretKeyAInput() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyBInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyBInput"></a>

```go
func OriginAuthSecretKeyBInput() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyNonceAInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceAInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceAInput"></a>

```go
func OriginAuthSecretKeyNonceAInput() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyNonceBInput`<sup>Optional</sup> <a name="OriginAuthSecretKeyNonceBInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceBInput"></a>

```go
func OriginAuthSecretKeyNonceBInput() *string
```

- *Type:* *string

---

##### `OriginAuthSignEncryptionInput`<sup>Optional</sup> <a name="OriginAuthSignEncryptionInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryptionInput"></a>

```go
func OriginAuthSignEncryptionInput() *string
```

- *Type:* *string

---

##### `OriginAuthSignTypeInput`<sup>Optional</sup> <a name="OriginAuthSignTypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignTypeInput"></a>

```go
func OriginAuthSignTypeInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `EdgeHostname`<sup>Required</sup> <a name="EdgeHostname" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeHostname"></a>

```go
func EdgeHostname() *string
```

- *Type:* *string

---

##### `EdgePathPrefix`<sup>Required</sup> <a name="EdgePathPrefix" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgePathPrefix"></a>

```go
func EdgePathPrefix() *string
```

- *Type:* *string

---

##### `EdgeTokenKey`<sup>Required</sup> <a name="EdgeTokenKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenKey"></a>

```go
func EdgeTokenKey() *string
```

- *Type:* *string

---

##### `EdgeTokenSalt`<sup>Required</sup> <a name="EdgeTokenSalt" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.edgeTokenSalt"></a>

```go
func EdgeTokenSalt() *string
```

- *Type:* *string

---

##### `IsEdgeTokenAuth`<sup>Required</sup> <a name="IsEdgeTokenAuth" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.isEdgeTokenAuth"></a>

```go
func IsEdgeTokenAuth() interface{}
```

- *Type:* interface{}

---

##### `OriginAuthSecretKeyA`<sup>Required</sup> <a name="OriginAuthSecretKeyA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyA"></a>

```go
func OriginAuthSecretKeyA() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyB`<sup>Required</sup> <a name="OriginAuthSecretKeyB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyB"></a>

```go
func OriginAuthSecretKeyB() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyNonceA`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceA" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceA"></a>

```go
func OriginAuthSecretKeyNonceA() *string
```

- *Type:* *string

---

##### `OriginAuthSecretKeyNonceB`<sup>Required</sup> <a name="OriginAuthSecretKeyNonceB" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSecretKeyNonceB"></a>

```go
func OriginAuthSecretKeyNonceB() *string
```

- *Type:* *string

---

##### `OriginAuthSignEncryption`<sup>Required</sup> <a name="OriginAuthSignEncryption" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignEncryption"></a>

```go
func OriginAuthSignEncryption() *string
```

- *Type:* *string

---

##### `OriginAuthSignType`<sup>Required</sup> <a name="OriginAuthSignType" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.originAuthSignType"></a>

```go
func OriginAuthSignType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() MediaServicesStreamCdnConfigConfigA
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigConfigA">MediaServicesStreamCdnConfigConfigA</a>

---


### MediaServicesStreamCdnConfigLocksList <a name="MediaServicesStreamCdnConfigLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.NewMediaServicesStreamCdnConfigLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaServicesStreamCdnConfigLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get"></a>

```go
func Get(index *f64) MediaServicesStreamCdnConfigLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesStreamCdnConfigLocksOutputReference <a name="MediaServicesStreamCdnConfigLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.NewMediaServicesStreamCdnConfigLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaServicesStreamCdnConfigLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId">ResetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated">ResetTimeCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```

##### `ResetRelatedResourceId` <a name="ResetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetRelatedResourceId"></a>

```go
func ResetRelatedResourceId()
```

##### `ResetTimeCreated` <a name="ResetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.resetTimeCreated"></a>

```go
func ResetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput">RelatedResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput">TimeCreatedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `RelatedResourceIdInput`<sup>Optional</sup> <a name="RelatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceIdInput"></a>

```go
func RelatedResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedInput`<sup>Optional</sup> <a name="TimeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreatedInput"></a>

```go
func TimeCreatedInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaServicesStreamCdnConfigTimeoutsOutputReference <a name="MediaServicesStreamCdnConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/mediaservicesstreamcdnconfig"

mediaservicesstreamcdnconfig.NewMediaServicesStreamCdnConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaServicesStreamCdnConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.mediaServicesStreamCdnConfig.MediaServicesStreamCdnConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



