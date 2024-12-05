# `goldenGateDeploymentBackup` Submodule <a name="`goldenGateDeploymentBackup` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeploymentBackup <a name="GoldenGateDeploymentBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup oci_golden_gate_deployment_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.NewGoldenGateDeploymentBackup(scope Construct, id *string, config GoldenGateDeploymentBackupConfig) GoldenGateDeploymentBackup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig">GoldenGateDeploymentBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig">GoldenGateDeploymentBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly">ResetIsMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts"></a>

```go
func PutTimeouts(value GoldenGateDeploymentBackupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetIsMetadataOnly` <a name="ResetIsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly"></a>

```go
func ResetIsMetadataOnly()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.GoldenGateDeploymentBackup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.GoldenGateDeploymentBackup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.GoldenGateDeploymentBackup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.GoldenGateDeploymentBackup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoldenGateDeploymentBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoldenGateDeploymentBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeploymentBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType">BackupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType">DeploymentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic">IsAutomatic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion">OggVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes">SizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished">TimeBackupFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup">TimeOfBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput">IsMetadataOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly">IsMetadataOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object">Object</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupType`<sup>Required</sup> <a name="BackupType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType"></a>

```go
func BackupType() *string
```

- *Type:* *string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType"></a>

```go
func DeploymentType() *string
```

- *Type:* *string

---

##### `IsAutomatic`<sup>Required</sup> <a name="IsAutomatic" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic"></a>

```go
func IsAutomatic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks"></a>

```go
func Locks() GoldenGateDeploymentBackupLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a>

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion"></a>

```go
func OggVersion() *string
```

- *Type:* *string

---

##### `SizeInBytes`<sup>Required</sup> <a name="SizeInBytes" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes"></a>

```go
func SizeInBytes() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeBackupFinished`<sup>Required</sup> <a name="TimeBackupFinished" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished"></a>

```go
func TimeBackupFinished() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfBackup`<sup>Required</sup> <a name="TimeOfBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup"></a>

```go
func TimeOfBackup() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts"></a>

```go
func Timeouts() GoldenGateDeploymentBackupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `IsMetadataOnlyInput`<sup>Optional</sup> <a name="IsMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput"></a>

```go
func IsMetadataOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

##### `IsMetadataOnly`<sup>Required</sup> <a name="IsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly"></a>

```go
func IsMetadataOnly() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentBackupConfig <a name="GoldenGateDeploymentBackupConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

&goldengatedeploymentbackup.GoldenGateDeploymentBackupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	CompartmentId: *string,
	DeploymentId: *string,
	DisplayName: *string,
	Namespace: *string,
	Object: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsLockOverride: interface{},
	IsMetadataOnly: interface{},
	Locks: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly">IsMetadataOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}.

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}.

---

##### `IsMetadataOnly`<sup>Optional</sup> <a name="IsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly"></a>

```go
IsMetadataOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#locks GoldenGateDeploymentBackup#locks}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts"></a>

```go
Timeouts GoldenGateDeploymentBackupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#timeouts GoldenGateDeploymentBackup#timeouts}

---

### GoldenGateDeploymentBackupLocks <a name="GoldenGateDeploymentBackupLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

&goldengatedeploymentbackup.GoldenGateDeploymentBackupLocks {
	Type: *string,
	Message: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}.

---

### GoldenGateDeploymentBackupTimeouts <a name="GoldenGateDeploymentBackupTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

&goldengatedeploymentbackup.GoldenGateDeploymentBackupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentBackupLocksList <a name="GoldenGateDeploymentBackupLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.NewGoldenGateDeploymentBackupLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoldenGateDeploymentBackupLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get"></a>

```go
func Get(index *f64) GoldenGateDeploymentBackupLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateDeploymentBackupLocksOutputReference <a name="GoldenGateDeploymentBackupLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.NewGoldenGateDeploymentBackupLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoldenGateDeploymentBackupLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateDeploymentBackupTimeoutsOutputReference <a name="GoldenGateDeploymentBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengatedeploymentbackup"

goldengatedeploymentbackup.NewGoldenGateDeploymentBackupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoldenGateDeploymentBackupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



