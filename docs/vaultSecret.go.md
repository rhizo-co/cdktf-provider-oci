# `vaultSecret` Submodule <a name="`vaultSecret` Submodule" id="rhizo-co-terraform-provider-oci.vaultSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecret <a name="VaultSecret" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret oci_vault_secret}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.NewVaultSecret(scope Construct, id *string, config VaultSecretConfig) VaultSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig">VaultSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig">VaultSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig">PutRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent">PutSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules">PutSecretRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig">ResetRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent">ResetSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules">ResetSecretRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRotationConfig` <a name="PutRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig"></a>

```go
func PutRotationConfig(value VaultSecretRotationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putRotationConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---

##### `PutSecretContent` <a name="PutSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent"></a>

```go
func PutSecretContent(value VaultSecretSecretContent)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretContent.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---

##### `PutSecretRules` <a name="PutSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules"></a>

```go
func PutSecretRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putSecretRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts"></a>

```go
func PutTimeouts(value VaultSecretTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetRotationConfig` <a name="ResetRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetRotationConfig"></a>

```go
func ResetRotationConfig()
```

##### `ResetSecretContent` <a name="ResetSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretContent"></a>

```go
func ResetSecretContent()
```

##### `ResetSecretRules` <a name="ResetSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetSecretRules"></a>

```go
func ResetSecretRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.VaultSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.VaultSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.VaultSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.VaultSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VaultSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VaultSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VaultSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber">CurrentVersionNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime">LastRotationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime">NextRotationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig">RotationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus">RotationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent">SecretContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules">SecretRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry">TimeOfCurrentVersionExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion">TimeOfDeletion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput">RotationConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput">SecretContentInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput">SecretNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput">SecretRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName">SecretName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CurrentVersionNumber`<sup>Required</sup> <a name="CurrentVersionNumber" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.currentVersionNumber"></a>

```go
func CurrentVersionNumber() *string
```

- *Type:* *string

---

##### `LastRotationTime`<sup>Required</sup> <a name="LastRotationTime" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lastRotationTime"></a>

```go
func LastRotationTime() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.nextRotationTime"></a>

```go
func NextRotationTime() *string
```

- *Type:* *string

---

##### `RotationConfig`<sup>Required</sup> <a name="RotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfig"></a>

```go
func RotationConfig() VaultSecretRotationConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference">VaultSecretRotationConfigOutputReference</a>

---

##### `RotationStatus`<sup>Required</sup> <a name="RotationStatus" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationStatus"></a>

```go
func RotationStatus() *string
```

- *Type:* *string

---

##### `SecretContent`<sup>Required</sup> <a name="SecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContent"></a>

```go
func SecretContent() VaultSecretSecretContentOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference">VaultSecretSecretContentOutputReference</a>

---

##### `SecretRules`<sup>Required</sup> <a name="SecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRules"></a>

```go
func SecretRules() VaultSecretSecretRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList">VaultSecretSecretRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfCurrentVersionExpiry`<sup>Required</sup> <a name="TimeOfCurrentVersionExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfCurrentVersionExpiry"></a>

```go
func TimeOfCurrentVersionExpiry() *string
```

- *Type:* *string

---

##### `TimeOfDeletion`<sup>Required</sup> <a name="TimeOfDeletion" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeOfDeletion"></a>

```go
func TimeOfDeletion() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeouts"></a>

```go
func Timeouts() VaultSecretTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference">VaultSecretTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RotationConfigInput`<sup>Optional</sup> <a name="RotationConfigInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.rotationConfigInput"></a>

```go
func RotationConfigInput() VaultSecretRotationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---

##### `SecretContentInput`<sup>Optional</sup> <a name="SecretContentInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretContentInput"></a>

```go
func SecretContentInput() VaultSecretSecretContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretNameInput"></a>

```go
func SecretNameInput() *string
```

- *Type:* *string

---

##### `SecretRulesInput`<sup>Optional</sup> <a name="SecretRulesInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretRulesInput"></a>

```go
func SecretRulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.secretName"></a>

```go
func SecretName() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretConfig <a name="VaultSecretConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

&vaultsecret.VaultSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	KeyId: *string,
	SecretName: *string,
	VaultId: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Metadata: *map[string]*string,
	RotationConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.vaultSecret.VaultSecretRotationConfig,
	SecretContent: github.com/rhizo-co/cdktf-provider-oci-go/oci.vaultSecret.VaultSecretSecretContent,
	SecretRules: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.vaultSecret.VaultSecretTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName">SecretName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig">RotationConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | rotation_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent">SecretContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | secret_content block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules">SecretRules</a></code> | <code>interface{}</code> | secret_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#compartment_id VaultSecret#compartment_id}.

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#key_id VaultSecret#key_id}.

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretName"></a>

```go
SecretName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_name VaultSecret#secret_name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#vault_id VaultSecret#vault_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#defined_tags VaultSecret#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#description VaultSecret#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#freeform_tags VaultSecret#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#id VaultSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#metadata VaultSecret#metadata}.

---

##### `RotationConfig`<sup>Optional</sup> <a name="RotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.rotationConfig"></a>

```go
RotationConfig VaultSecretRotationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

rotation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_config VaultSecret#rotation_config}

---

##### `SecretContent`<sup>Optional</sup> <a name="SecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretContent"></a>

```go
SecretContent VaultSecretSecretContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

secret_content block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_content VaultSecret#secret_content}

---

##### `SecretRules`<sup>Optional</sup> <a name="SecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.secretRules"></a>

```go
SecretRules interface{}
```

- *Type:* interface{}

secret_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_rules VaultSecret#secret_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretConfig.property.timeouts"></a>

```go
Timeouts VaultSecretTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts">VaultSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#timeouts VaultSecret#timeouts}

---

### VaultSecretRotationConfig <a name="VaultSecretRotationConfig" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

&vaultsecret.VaultSecretRotationConfig {
	TargetSystemDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails,
	IsScheduledRotationEnabled: interface{},
	RotationInterval: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails">TargetSystemDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | target_system_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled">IsScheduledRotationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval">RotationInterval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}. |

---

##### `TargetSystemDetails`<sup>Required</sup> <a name="TargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.targetSystemDetails"></a>

```go
TargetSystemDetails VaultSecretRotationConfigTargetSystemDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

target_system_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_details VaultSecret#target_system_details}

---

##### `IsScheduledRotationEnabled`<sup>Optional</sup> <a name="IsScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.isScheduledRotationEnabled"></a>

```go
IsScheduledRotationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_scheduled_rotation_enabled VaultSecret#is_scheduled_rotation_enabled}.

---

##### `RotationInterval`<sup>Optional</sup> <a name="RotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig.property.rotationInterval"></a>

```go
RotationInterval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rotation_interval VaultSecret#rotation_interval}.

---

### VaultSecretRotationConfigTargetSystemDetails <a name="VaultSecretRotationConfigTargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

&vaultsecret.VaultSecretRotationConfigTargetSystemDetails {
	TargetSystemType: *string,
	AdbId: *string,
	FunctionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType">TargetSystemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId">AdbId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId">FunctionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}. |

---

##### `TargetSystemType`<sup>Required</sup> <a name="TargetSystemType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.targetSystemType"></a>

```go
TargetSystemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#target_system_type VaultSecret#target_system_type}.

---

##### `AdbId`<sup>Optional</sup> <a name="AdbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.adbId"></a>

```go
AdbId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#adb_id VaultSecret#adb_id}.

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails.property.functionId"></a>

```go
FunctionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#function_id VaultSecret#function_id}.

---

### VaultSecretSecretContent <a name="VaultSecretSecretContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

&vaultsecret.VaultSecretSecretContent {
	ContentType: *string,
	Content: *string,
	Name: *string,
	Stage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType">ContentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage">Stage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content_type VaultSecret#content_type}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#content VaultSecret#content}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#name VaultSecret#name}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#stage VaultSecret#stage}.

---

### VaultSecretSecretRules <a name="VaultSecretSecretRules" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

&vaultsecret.VaultSecretSecretRules {
	RuleType: *string,
	IsEnforcedOnDeletedSecretVersions: interface{},
	IsSecretContentRetrievalBlockedOnExpiry: interface{},
	SecretVersionExpiryInterval: *string,
	TimeOfAbsoluteExpiry: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType">RuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions">IsEnforcedOnDeletedSecretVersions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry">IsSecretContentRetrievalBlockedOnExpiry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval">SecretVersionExpiryInterval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry">TimeOfAbsoluteExpiry</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}. |

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.ruleType"></a>

```go
RuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#rule_type VaultSecret#rule_type}.

---

##### `IsEnforcedOnDeletedSecretVersions`<sup>Optional</sup> <a name="IsEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isEnforcedOnDeletedSecretVersions"></a>

```go
IsEnforcedOnDeletedSecretVersions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_enforced_on_deleted_secret_versions VaultSecret#is_enforced_on_deleted_secret_versions}.

---

##### `IsSecretContentRetrievalBlockedOnExpiry`<sup>Optional</sup> <a name="IsSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```go
IsSecretContentRetrievalBlockedOnExpiry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#is_secret_content_retrieval_blocked_on_expiry VaultSecret#is_secret_content_retrieval_blocked_on_expiry}.

---

##### `SecretVersionExpiryInterval`<sup>Optional</sup> <a name="SecretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.secretVersionExpiryInterval"></a>

```go
SecretVersionExpiryInterval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#secret_version_expiry_interval VaultSecret#secret_version_expiry_interval}.

---

##### `TimeOfAbsoluteExpiry`<sup>Optional</sup> <a name="TimeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRules.property.timeOfAbsoluteExpiry"></a>

```go
TimeOfAbsoluteExpiry *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#time_of_absolute_expiry VaultSecret#time_of_absolute_expiry}.

---

### VaultSecretTimeouts <a name="VaultSecretTimeouts" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

&vaultsecret.VaultSecretTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#create VaultSecret#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#delete VaultSecret#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/vault_secret#update VaultSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretRotationConfigOutputReference <a name="VaultSecretRotationConfigOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.NewVaultSecretRotationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretRotationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails">PutTargetSystemDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled">ResetIsScheduledRotationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval">ResetRotationInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetSystemDetails` <a name="PutTargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails"></a>

```go
func PutTargetSystemDetails(value VaultSecretRotationConfigTargetSystemDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.putTargetSystemDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---

##### `ResetIsScheduledRotationEnabled` <a name="ResetIsScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetIsScheduledRotationEnabled"></a>

```go
func ResetIsScheduledRotationEnabled()
```

##### `ResetRotationInterval` <a name="ResetRotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.resetRotationInterval"></a>

```go
func ResetRotationInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails">TargetSystemDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput">IsScheduledRotationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput">RotationIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput">TargetSystemDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled">IsScheduledRotationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval">RotationInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetSystemDetails`<sup>Required</sup> <a name="TargetSystemDetails" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetails"></a>

```go
func TargetSystemDetails() VaultSecretRotationConfigTargetSystemDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference">VaultSecretRotationConfigTargetSystemDetailsOutputReference</a>

---

##### `IsScheduledRotationEnabledInput`<sup>Optional</sup> <a name="IsScheduledRotationEnabledInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabledInput"></a>

```go
func IsScheduledRotationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RotationIntervalInput`<sup>Optional</sup> <a name="RotationIntervalInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationIntervalInput"></a>

```go
func RotationIntervalInput() *string
```

- *Type:* *string

---

##### `TargetSystemDetailsInput`<sup>Optional</sup> <a name="TargetSystemDetailsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.targetSystemDetailsInput"></a>

```go
func TargetSystemDetailsInput() VaultSecretRotationConfigTargetSystemDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---

##### `IsScheduledRotationEnabled`<sup>Required</sup> <a name="IsScheduledRotationEnabled" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.isScheduledRotationEnabled"></a>

```go
func IsScheduledRotationEnabled() interface{}
```

- *Type:* interface{}

---

##### `RotationInterval`<sup>Required</sup> <a name="RotationInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.rotationInterval"></a>

```go
func RotationInterval() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VaultSecretRotationConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfig">VaultSecretRotationConfig</a>

---


### VaultSecretRotationConfigTargetSystemDetailsOutputReference <a name="VaultSecretRotationConfigTargetSystemDetailsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.NewVaultSecretRotationConfigTargetSystemDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretRotationConfigTargetSystemDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId">ResetAdbId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId">ResetFunctionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdbId` <a name="ResetAdbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetAdbId"></a>

```go
func ResetAdbId()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.resetFunctionId"></a>

```go
func ResetFunctionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput">AdbIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput">TargetSystemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId">AdbId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType">TargetSystemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdbIdInput`<sup>Optional</sup> <a name="AdbIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbIdInput"></a>

```go
func AdbIdInput() *string
```

- *Type:* *string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionIdInput"></a>

```go
func FunctionIdInput() *string
```

- *Type:* *string

---

##### `TargetSystemTypeInput`<sup>Optional</sup> <a name="TargetSystemTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemTypeInput"></a>

```go
func TargetSystemTypeInput() *string
```

- *Type:* *string

---

##### `AdbId`<sup>Required</sup> <a name="AdbId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.adbId"></a>

```go
func AdbId() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `TargetSystemType`<sup>Required</sup> <a name="TargetSystemType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.targetSystemType"></a>

```go
func TargetSystemType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() VaultSecretRotationConfigTargetSystemDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretRotationConfigTargetSystemDetails">VaultSecretRotationConfigTargetSystemDetails</a>

---


### VaultSecretSecretContentOutputReference <a name="VaultSecretSecretContentOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.NewVaultSecretSecretContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretSecretContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetContent"></a>

```go
func ResetContent()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetStage` <a name="ResetStage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.resetStage"></a>

```go
func ResetStage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContentOutputReference.property.internalValue"></a>

```go
func InternalValue() VaultSecretSecretContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretContent">VaultSecretSecretContent</a>

---


### VaultSecretSecretRulesList <a name="VaultSecretSecretRulesList" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.NewVaultSecretSecretRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VaultSecretSecretRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get"></a>

```go
func Get(index *f64) VaultSecretSecretRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretSecretRulesOutputReference <a name="VaultSecretSecretRulesOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.NewVaultSecretSecretRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VaultSecretSecretRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions">ResetIsEnforcedOnDeletedSecretVersions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry">ResetIsSecretContentRetrievalBlockedOnExpiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval">ResetSecretVersionExpiryInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry">ResetTimeOfAbsoluteExpiry</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnforcedOnDeletedSecretVersions` <a name="ResetIsEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsEnforcedOnDeletedSecretVersions"></a>

```go
func ResetIsEnforcedOnDeletedSecretVersions()
```

##### `ResetIsSecretContentRetrievalBlockedOnExpiry` <a name="ResetIsSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetIsSecretContentRetrievalBlockedOnExpiry"></a>

```go
func ResetIsSecretContentRetrievalBlockedOnExpiry()
```

##### `ResetSecretVersionExpiryInterval` <a name="ResetSecretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetSecretVersionExpiryInterval"></a>

```go
func ResetSecretVersionExpiryInterval()
```

##### `ResetTimeOfAbsoluteExpiry` <a name="ResetTimeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.resetTimeOfAbsoluteExpiry"></a>

```go
func ResetTimeOfAbsoluteExpiry()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput">IsEnforcedOnDeletedSecretVersionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput">IsSecretContentRetrievalBlockedOnExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput">SecretVersionExpiryIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput">TimeOfAbsoluteExpiryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions">IsEnforcedOnDeletedSecretVersions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry">IsSecretContentRetrievalBlockedOnExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval">SecretVersionExpiryInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry">TimeOfAbsoluteExpiry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnforcedOnDeletedSecretVersionsInput`<sup>Optional</sup> <a name="IsEnforcedOnDeletedSecretVersionsInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersionsInput"></a>

```go
func IsEnforcedOnDeletedSecretVersionsInput() interface{}
```

- *Type:* interface{}

---

##### `IsSecretContentRetrievalBlockedOnExpiryInput`<sup>Optional</sup> <a name="IsSecretContentRetrievalBlockedOnExpiryInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiryInput"></a>

```go
func IsSecretContentRetrievalBlockedOnExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleTypeInput"></a>

```go
func RuleTypeInput() *string
```

- *Type:* *string

---

##### `SecretVersionExpiryIntervalInput`<sup>Optional</sup> <a name="SecretVersionExpiryIntervalInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryIntervalInput"></a>

```go
func SecretVersionExpiryIntervalInput() *string
```

- *Type:* *string

---

##### `TimeOfAbsoluteExpiryInput`<sup>Optional</sup> <a name="TimeOfAbsoluteExpiryInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiryInput"></a>

```go
func TimeOfAbsoluteExpiryInput() *string
```

- *Type:* *string

---

##### `IsEnforcedOnDeletedSecretVersions`<sup>Required</sup> <a name="IsEnforcedOnDeletedSecretVersions" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isEnforcedOnDeletedSecretVersions"></a>

```go
func IsEnforcedOnDeletedSecretVersions() interface{}
```

- *Type:* interface{}

---

##### `IsSecretContentRetrievalBlockedOnExpiry`<sup>Required</sup> <a name="IsSecretContentRetrievalBlockedOnExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.isSecretContentRetrievalBlockedOnExpiry"></a>

```go
func IsSecretContentRetrievalBlockedOnExpiry() interface{}
```

- *Type:* interface{}

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `SecretVersionExpiryInterval`<sup>Required</sup> <a name="SecretVersionExpiryInterval" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.secretVersionExpiryInterval"></a>

```go
func SecretVersionExpiryInterval() *string
```

- *Type:* *string

---

##### `TimeOfAbsoluteExpiry`<sup>Required</sup> <a name="TimeOfAbsoluteExpiry" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.timeOfAbsoluteExpiry"></a>

```go
func TimeOfAbsoluteExpiry() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretSecretRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VaultSecretTimeoutsOutputReference <a name="VaultSecretTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/vaultsecret"

vaultsecret.NewVaultSecretTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VaultSecretTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.vaultSecret.VaultSecretTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



