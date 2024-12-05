# `kmsVault` Submodule <a name="`kmsVault` Submodule" id="rhizo-co-terraform-provider-oci.kmsVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsVault <a name="KmsVault" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault oci_kms_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVault(scope Construct, id *string, config KmsVaultConfig) KmsVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig">KmsVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig">KmsVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata">PutExternalKeyManagerMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile">PutRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore">PutRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetExternalKeyManagerMetadata">ResetExternalKeyManagerMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromFile">ResetRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromObjectStore">ResetRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreTrigger">ResetRestoreTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeOfDeletion">ResetTimeOfDeletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExternalKeyManagerMetadata` <a name="PutExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata"></a>

```go
func PutExternalKeyManagerMetadata(value KmsVaultExternalKeyManagerMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---

##### `PutRestoreFromFile` <a name="PutRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile"></a>

```go
func PutRestoreFromFile(value KmsVaultRestoreFromFile)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---

##### `PutRestoreFromObjectStore` <a name="PutRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore"></a>

```go
func PutRestoreFromObjectStore(value KmsVaultRestoreFromObjectStore)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts"></a>

```go
func PutTimeouts(value KmsVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetExternalKeyManagerMetadata` <a name="ResetExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetExternalKeyManagerMetadata"></a>

```go
func ResetExternalKeyManagerMetadata()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetId"></a>

```go
func ResetId()
```

##### `ResetRestoreFromFile` <a name="ResetRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromFile"></a>

```go
func ResetRestoreFromFile()
```

##### `ResetRestoreFromObjectStore` <a name="ResetRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromObjectStore"></a>

```go
func ResetRestoreFromObjectStore()
```

##### `ResetRestoreTrigger` <a name="ResetRestoreTrigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreTrigger"></a>

```go
func ResetRestoreTrigger()
```

##### `ResetTimeOfDeletion` <a name="ResetTimeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeOfDeletion"></a>

```go
func ResetTimeOfDeletion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KmsVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.KmsVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.KmsVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.KmsVault_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.KmsVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KmsVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KmsVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KmsVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KmsVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cryptoEndpoint">CryptoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadata">ExternalKeyManagerMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataSummary">ExternalKeyManagerMetadataSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isPrimary">IsPrimary</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isVaultReplicable">IsVaultReplicable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.managementEndpoint">ManagementEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.replicaDetails">ReplicaDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList">KmsVaultReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoredFromVaultId">RestoredFromVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFile">RestoreFromFile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference">KmsVaultRestoreFromFileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStore">RestoreFromObjectStore</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference">KmsVaultRestoreFromObjectStoreOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference">KmsVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataInput">ExternalKeyManagerMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFileInput">RestoreFromFileInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStoreInput">RestoreFromObjectStoreInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTriggerInput">RestoreTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletionInput">TimeOfDeletionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultTypeInput">VaultTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTrigger">RestoreTrigger</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultType">VaultType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CryptoEndpoint`<sup>Required</sup> <a name="CryptoEndpoint" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cryptoEndpoint"></a>

```go
func CryptoEndpoint() *string
```

- *Type:* *string

---

##### `ExternalKeyManagerMetadata`<sup>Required</sup> <a name="ExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadata"></a>

```go
func ExternalKeyManagerMetadata() KmsVaultExternalKeyManagerMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOutputReference</a>

---

##### `ExternalKeyManagerMetadataSummary`<sup>Required</sup> <a name="ExternalKeyManagerMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataSummary"></a>

```go
func ExternalKeyManagerMetadataSummary() KmsVaultExternalKeyManagerMetadataSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryList</a>

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isPrimary"></a>

```go
func IsPrimary() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsVaultReplicable`<sup>Required</sup> <a name="IsVaultReplicable" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isVaultReplicable"></a>

```go
func IsVaultReplicable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ManagementEndpoint`<sup>Required</sup> <a name="ManagementEndpoint" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.managementEndpoint"></a>

```go
func ManagementEndpoint() *string
```

- *Type:* *string

---

##### `ReplicaDetails`<sup>Required</sup> <a name="ReplicaDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.replicaDetails"></a>

```go
func ReplicaDetails() KmsVaultReplicaDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList">KmsVaultReplicaDetailsList</a>

---

##### `RestoredFromVaultId`<sup>Required</sup> <a name="RestoredFromVaultId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoredFromVaultId"></a>

```go
func RestoredFromVaultId() *string
```

- *Type:* *string

---

##### `RestoreFromFile`<sup>Required</sup> <a name="RestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFile"></a>

```go
func RestoreFromFile() KmsVaultRestoreFromFileOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference">KmsVaultRestoreFromFileOutputReference</a>

---

##### `RestoreFromObjectStore`<sup>Required</sup> <a name="RestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStore"></a>

```go
func RestoreFromObjectStore() KmsVaultRestoreFromObjectStoreOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference">KmsVaultRestoreFromObjectStoreOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeouts"></a>

```go
func Timeouts() KmsVaultTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference">KmsVaultTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalKeyManagerMetadataInput`<sup>Optional</sup> <a name="ExternalKeyManagerMetadataInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataInput"></a>

```go
func ExternalKeyManagerMetadataInput() KmsVaultExternalKeyManagerMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RestoreFromFileInput`<sup>Optional</sup> <a name="RestoreFromFileInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFileInput"></a>

```go
func RestoreFromFileInput() KmsVaultRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---

##### `RestoreFromObjectStoreInput`<sup>Optional</sup> <a name="RestoreFromObjectStoreInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStoreInput"></a>

```go
func RestoreFromObjectStoreInput() KmsVaultRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---

##### `RestoreTriggerInput`<sup>Optional</sup> <a name="RestoreTriggerInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTriggerInput"></a>

```go
func RestoreTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `TimeOfDeletionInput`<sup>Optional</sup> <a name="TimeOfDeletionInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletionInput"></a>

```go
func TimeOfDeletionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VaultTypeInput`<sup>Optional</sup> <a name="VaultTypeInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultTypeInput"></a>

```go
func VaultTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RestoreTrigger`<sup>Required</sup> <a name="RestoreTrigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTrigger"></a>

```go
func RestoreTrigger() interface{}
```

- *Type:* interface{}

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `VaultType`<sup>Required</sup> <a name="VaultType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultType"></a>

```go
func VaultType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KmsVaultConfig <a name="KmsVaultConfig" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	VaultType: *string,
	DefinedTags: *map[string]*string,
	ExternalKeyManagerMetadata: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsVault.KmsVaultExternalKeyManagerMetadata,
	FreeformTags: *map[string]*string,
	Id: *string,
	RestoreFromFile: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsVault.KmsVaultRestoreFromFile,
	RestoreFromObjectStore: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsVault.KmsVaultRestoreFromObjectStore,
	RestoreTrigger: interface{},
	TimeOfDeletion: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsVault.KmsVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.vaultType">VaultType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.externalKeyManagerMetadata">ExternalKeyManagerMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | external_key_manager_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromFile">RestoreFromFile</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | restore_from_file block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromObjectStore">RestoreFromObjectStore</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | restore_from_object_store block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreTrigger">RestoreTrigger</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}.

---

##### `VaultType`<sup>Required</sup> <a name="VaultType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.vaultType"></a>

```go
VaultType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}.

---

##### `ExternalKeyManagerMetadata`<sup>Optional</sup> <a name="ExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.externalKeyManagerMetadata"></a>

```go
ExternalKeyManagerMetadata KmsVaultExternalKeyManagerMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

external_key_manager_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_key_manager_metadata KmsVault#external_key_manager_metadata}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RestoreFromFile`<sup>Optional</sup> <a name="RestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromFile"></a>

```go
RestoreFromFile KmsVaultRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

restore_from_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_file KmsVault#restore_from_file}

---

##### `RestoreFromObjectStore`<sup>Optional</sup> <a name="RestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromObjectStore"></a>

```go
RestoreFromObjectStore KmsVaultRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

restore_from_object_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_object_store KmsVault#restore_from_object_store}

---

##### `RestoreTrigger`<sup>Optional</sup> <a name="RestoreTrigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreTrigger"></a>

```go
RestoreTrigger interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}.

---

##### `TimeOfDeletion`<sup>Optional</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeOfDeletion"></a>

```go
TimeOfDeletion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeouts"></a>

```go
Timeouts KmsVaultTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#timeouts KmsVault#timeouts}

---

### KmsVaultExternalKeyManagerMetadata <a name="KmsVaultExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultExternalKeyManagerMetadata {
	ExternalVaultEndpointUrl: *string,
	OauthMetadata: github.com/rhizo-co/cdktf-provider-oci-go/oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata,
	PrivateEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.externalVaultEndpointUrl">ExternalVaultEndpointUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.oauthMetadata">OauthMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | oauth_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}. |

---

##### `ExternalVaultEndpointUrl`<sup>Required</sup> <a name="ExternalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.externalVaultEndpointUrl"></a>

```go
ExternalVaultEndpointUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}.

---

##### `OauthMetadata`<sup>Required</sup> <a name="OauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.oauthMetadata"></a>

```go
OauthMetadata KmsVaultExternalKeyManagerMetadataOauthMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

oauth_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#oauth_metadata KmsVault#oauth_metadata}

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.privateEndpointId"></a>

```go
PrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}.

---

### KmsVaultExternalKeyManagerMetadataOauthMetadata <a name="KmsVaultExternalKeyManagerMetadataOauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultExternalKeyManagerMetadataOauthMetadata {
	ClientAppId: *string,
	ClientAppSecret: *string,
	IdcsAccountNameUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppId">ClientAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppSecret">ClientAppSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.idcsAccountNameUrl">IdcsAccountNameUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}. |

---

##### `ClientAppId`<sup>Required</sup> <a name="ClientAppId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppId"></a>

```go
ClientAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}.

---

##### `ClientAppSecret`<sup>Required</sup> <a name="ClientAppSecret" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppSecret"></a>

```go
ClientAppSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}.

---

##### `IdcsAccountNameUrl`<sup>Required</sup> <a name="IdcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.idcsAccountNameUrl"></a>

```go
IdcsAccountNameUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}.

---

### KmsVaultExternalKeyManagerMetadataSummary <a name="KmsVaultExternalKeyManagerMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultExternalKeyManagerMetadataSummary {

}
```


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary {

}
```


### KmsVaultReplicaDetails <a name="KmsVaultReplicaDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultReplicaDetails {

}
```


### KmsVaultRestoreFromFile <a name="KmsVaultRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultRestoreFromFile {
	ContentLength: *string,
	RestoreVaultFromFileDetails: *string,
	ContentMd5: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentLength">ContentLength</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_length KmsVault#content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.restoreVaultFromFileDetails">RestoreVaultFromFileDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_md5 KmsVault#content_md5}. |

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentLength"></a>

```go
ContentLength *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_length KmsVault#content_length}.

---

##### `RestoreVaultFromFileDetails`<sup>Required</sup> <a name="RestoreVaultFromFileDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.restoreVaultFromFileDetails"></a>

```go
RestoreVaultFromFileDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}.

---

##### `ContentMd5`<sup>Optional</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentMd5"></a>

```go
ContentMd5 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_md5 KmsVault#content_md5}.

---

### KmsVaultRestoreFromObjectStore <a name="KmsVaultRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultRestoreFromObjectStore {
	Destination: *string,
	Bucket: *string,
	Namespace: *string,
	Object: *string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#destination KmsVault#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#bucket KmsVault#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#namespace KmsVault#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.object">Object</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#object KmsVault#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#uri KmsVault#uri}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#destination KmsVault#destination}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#bucket KmsVault#bucket}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#namespace KmsVault#namespace}.

---

##### `Object`<sup>Optional</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.object"></a>

```go
Object *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#object KmsVault#object}.

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#uri KmsVault#uri}.

---

### KmsVaultTimeouts <a name="KmsVaultTimeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

&kmsvault.KmsVaultTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#create KmsVault#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#delete KmsVault#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#update KmsVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#create KmsVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#delete KmsVault#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#update KmsVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference <a name="KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppIdInput">ClientAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecretInput">ClientAppSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrlInput">IdcsAccountNameUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId">ClientAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret">ClientAppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl">IdcsAccountNameUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAppIdInput`<sup>Optional</sup> <a name="ClientAppIdInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppIdInput"></a>

```go
func ClientAppIdInput() *string
```

- *Type:* *string

---

##### `ClientAppSecretInput`<sup>Optional</sup> <a name="ClientAppSecretInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecretInput"></a>

```go
func ClientAppSecretInput() *string
```

- *Type:* *string

---

##### `IdcsAccountNameUrlInput`<sup>Optional</sup> <a name="IdcsAccountNameUrlInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrlInput"></a>

```go
func IdcsAccountNameUrlInput() *string
```

- *Type:* *string

---

##### `ClientAppId`<sup>Required</sup> <a name="ClientAppId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId"></a>

```go
func ClientAppId() *string
```

- *Type:* *string

---

##### `ClientAppSecret`<sup>Required</sup> <a name="ClientAppSecret" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret"></a>

```go
func ClientAppSecret() *string
```

- *Type:* *string

---

##### `IdcsAccountNameUrl`<sup>Required</sup> <a name="IdcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl"></a>

```go
func IdcsAccountNameUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsVaultExternalKeyManagerMetadataOauthMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---


### KmsVaultExternalKeyManagerMetadataOutputReference <a name="KmsVaultExternalKeyManagerMetadataOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultExternalKeyManagerMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsVaultExternalKeyManagerMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata">PutOauthMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthMetadata` <a name="PutOauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata"></a>

```go
func PutOauthMetadata(value KmsVaultExternalKeyManagerMetadataOauthMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata">OauthMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrlInput">ExternalVaultEndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadataInput">OauthMetadataInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl">ExternalVaultEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OauthMetadata`<sup>Required</sup> <a name="OauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata"></a>

```go
func OauthMetadata() KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference</a>

---

##### `ExternalVaultEndpointUrlInput`<sup>Optional</sup> <a name="ExternalVaultEndpointUrlInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrlInput"></a>

```go
func ExternalVaultEndpointUrlInput() *string
```

- *Type:* *string

---

##### `OauthMetadataInput`<sup>Optional</sup> <a name="OauthMetadataInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadataInput"></a>

```go
func OauthMetadataInput() KmsVaultExternalKeyManagerMetadataOauthMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointIdInput"></a>

```go
func PrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `ExternalVaultEndpointUrl`<sup>Required</sup> <a name="ExternalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl"></a>

```go
func ExternalVaultEndpointUrl() *string
```

- *Type:* *string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsVaultExternalKeyManagerMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---


### KmsVaultExternalKeyManagerMetadataSummaryList <a name="KmsVaultExternalKeyManagerMetadataSummaryList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultExternalKeyManagerMetadataSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsVaultExternalKeyManagerMetadataSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get"></a>

```go
func Get(index *f64) KmsVaultExternalKeyManagerMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get"></a>

```go
func Get(index *f64) KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId">ClientAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl">IdcsAccountNameUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAppId`<sup>Required</sup> <a name="ClientAppId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId"></a>

```go
func ClientAppId() *string
```

- *Type:* *string

---

##### `IdcsAccountNameUrl`<sup>Required</sup> <a name="IdcsAccountNameUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl"></a>

```go
func IdcsAccountNameUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a>

---


### KmsVaultExternalKeyManagerMetadataSummaryOutputReference <a name="KmsVaultExternalKeyManagerMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultExternalKeyManagerMetadataSummaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsVaultExternalKeyManagerMetadataSummaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl">ExternalVaultEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary">OauthMetadataSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary">KmsVaultExternalKeyManagerMetadataSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalVaultEndpointUrl`<sup>Required</sup> <a name="ExternalVaultEndpointUrl" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl"></a>

```go
func ExternalVaultEndpointUrl() *string
```

- *Type:* *string

---

##### `OauthMetadataSummary`<sup>Required</sup> <a name="OauthMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary"></a>

```go
func OauthMetadataSummary() KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a>

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsVaultExternalKeyManagerMetadataSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary">KmsVaultExternalKeyManagerMetadataSummary</a>

---


### KmsVaultReplicaDetailsList <a name="KmsVaultReplicaDetailsList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultReplicaDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) KmsVaultReplicaDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get"></a>

```go
func Get(index *f64) KmsVaultReplicaDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### KmsVaultReplicaDetailsOutputReference <a name="KmsVaultReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultReplicaDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) KmsVaultReplicaDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.replicationId">ReplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails">KmsVaultReplicaDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReplicationId`<sup>Required</sup> <a name="ReplicationId" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.replicationId"></a>

```go
func ReplicationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsVaultReplicaDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails">KmsVaultReplicaDetails</a>

---


### KmsVaultRestoreFromFileOutputReference <a name="KmsVaultRestoreFromFileOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultRestoreFromFileOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsVaultRestoreFromFileOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resetContentMd5">ResetContentMd5</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentMd5` <a name="ResetContentMd5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resetContentMd5"></a>

```go
func ResetContentMd5()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLengthInput">ContentLengthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5Input">ContentMd5Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetailsInput">RestoreVaultFromFileDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLength">ContentLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5">ContentMd5</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails">RestoreVaultFromFileDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentLengthInput`<sup>Optional</sup> <a name="ContentLengthInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLengthInput"></a>

```go
func ContentLengthInput() *string
```

- *Type:* *string

---

##### `ContentMd5Input`<sup>Optional</sup> <a name="ContentMd5Input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5Input"></a>

```go
func ContentMd5Input() *string
```

- *Type:* *string

---

##### `RestoreVaultFromFileDetailsInput`<sup>Optional</sup> <a name="RestoreVaultFromFileDetailsInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetailsInput"></a>

```go
func RestoreVaultFromFileDetailsInput() *string
```

- *Type:* *string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLength"></a>

```go
func ContentLength() *string
```

- *Type:* *string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5"></a>

```go
func ContentMd5() *string
```

- *Type:* *string

---

##### `RestoreVaultFromFileDetails`<sup>Required</sup> <a name="RestoreVaultFromFileDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails"></a>

```go
func RestoreVaultFromFileDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsVaultRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---


### KmsVaultRestoreFromObjectStoreOutputReference <a name="KmsVaultRestoreFromObjectStoreOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultRestoreFromObjectStoreOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsVaultRestoreFromObjectStoreOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetObject">ResetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetNamespace` <a name="ResetNamespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetObject` <a name="ResetObject" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetObject"></a>

```go
func ResetObject()
```

##### `ResetUri` <a name="ResetUri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetUri"></a>

```go
func ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.objectInput">ObjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.objectInput"></a>

```go
func ObjectInput() *string
```

- *Type:* *string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.internalValue"></a>

```go
func InternalValue() KmsVaultRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---


### KmsVaultTimeoutsOutputReference <a name="KmsVaultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/kmsvault"

kmsvault.NewKmsVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KmsVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



