# `identityUserCapabilitiesManagement` Submodule <a name="`identityUserCapabilitiesManagement` Submodule" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityUserCapabilitiesManagement <a name="IdentityUserCapabilitiesManagement" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management oci_identity_user_capabilities_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

identityusercapabilitiesmanagement.NewIdentityUserCapabilitiesManagement(scope Construct, id *string, config IdentityUserCapabilitiesManagementConfig) IdentityUserCapabilitiesManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig">IdentityUserCapabilitiesManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig">IdentityUserCapabilitiesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys">ResetCanUseApiKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens">ResetCanUseAuthTokens</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword">ResetCanUseConsolePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys">ResetCanUseCustomerSecretKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials">ResetCanUseSmtpCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts"></a>

```go
func PutTimeouts(value IdentityUserCapabilitiesManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

---

##### `ResetCanUseApiKeys` <a name="ResetCanUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseApiKeys"></a>

```go
func ResetCanUseApiKeys()
```

##### `ResetCanUseAuthTokens` <a name="ResetCanUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseAuthTokens"></a>

```go
func ResetCanUseAuthTokens()
```

##### `ResetCanUseConsolePassword` <a name="ResetCanUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseConsolePassword"></a>

```go
func ResetCanUseConsolePassword()
```

##### `ResetCanUseCustomerSecretKeys` <a name="ResetCanUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseCustomerSecretKeys"></a>

```go
func ResetCanUseCustomerSecretKeys()
```

##### `ResetCanUseSmtpCredentials` <a name="ResetCanUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetCanUseSmtpCredentials"></a>

```go
func ResetCanUseSmtpCredentials()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

identityusercapabilitiesmanagement.IdentityUserCapabilitiesManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

identityusercapabilitiesmanagement.IdentityUserCapabilitiesManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

identityusercapabilitiesmanagement.IdentityUserCapabilitiesManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

identityusercapabilitiesmanagement.IdentityUserCapabilitiesManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityUserCapabilitiesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityUserCapabilitiesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityUserCapabilitiesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityUserCapabilitiesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput">CanUseApiKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput">CanUseAuthTokensInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput">CanUseConsolePasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput">CanUseCustomerSecretKeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput">CanUseSmtpCredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys">CanUseApiKeys</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens">CanUseAuthTokens</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword">CanUseConsolePassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys">CanUseCustomerSecretKeys</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials">CanUseSmtpCredentials</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeouts"></a>

```go
func Timeouts() IdentityUserCapabilitiesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference">IdentityUserCapabilitiesManagementTimeoutsOutputReference</a>

---

##### `CanUseApiKeysInput`<sup>Optional</sup> <a name="CanUseApiKeysInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeysInput"></a>

```go
func CanUseApiKeysInput() interface{}
```

- *Type:* interface{}

---

##### `CanUseAuthTokensInput`<sup>Optional</sup> <a name="CanUseAuthTokensInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokensInput"></a>

```go
func CanUseAuthTokensInput() interface{}
```

- *Type:* interface{}

---

##### `CanUseConsolePasswordInput`<sup>Optional</sup> <a name="CanUseConsolePasswordInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePasswordInput"></a>

```go
func CanUseConsolePasswordInput() interface{}
```

- *Type:* interface{}

---

##### `CanUseCustomerSecretKeysInput`<sup>Optional</sup> <a name="CanUseCustomerSecretKeysInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeysInput"></a>

```go
func CanUseCustomerSecretKeysInput() interface{}
```

- *Type:* interface{}

---

##### `CanUseSmtpCredentialsInput`<sup>Optional</sup> <a name="CanUseSmtpCredentialsInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentialsInput"></a>

```go
func CanUseSmtpCredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `CanUseApiKeys`<sup>Required</sup> <a name="CanUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseApiKeys"></a>

```go
func CanUseApiKeys() interface{}
```

- *Type:* interface{}

---

##### `CanUseAuthTokens`<sup>Required</sup> <a name="CanUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseAuthTokens"></a>

```go
func CanUseAuthTokens() interface{}
```

- *Type:* interface{}

---

##### `CanUseConsolePassword`<sup>Required</sup> <a name="CanUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseConsolePassword"></a>

```go
func CanUseConsolePassword() interface{}
```

- *Type:* interface{}

---

##### `CanUseCustomerSecretKeys`<sup>Required</sup> <a name="CanUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseCustomerSecretKeys"></a>

```go
func CanUseCustomerSecretKeys() interface{}
```

- *Type:* interface{}

---

##### `CanUseSmtpCredentials`<sup>Required</sup> <a name="CanUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.canUseSmtpCredentials"></a>

```go
func CanUseSmtpCredentials() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityUserCapabilitiesManagementConfig <a name="IdentityUserCapabilitiesManagementConfig" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

&identityusercapabilitiesmanagement.IdentityUserCapabilitiesManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UserId: *string,
	CanUseApiKeys: interface{},
	CanUseAuthTokens: interface{},
	CanUseConsolePassword: interface{},
	CanUseCustomerSecretKeys: interface{},
	CanUseSmtpCredentials: interface{},
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys">CanUseApiKeys</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens">CanUseAuthTokens</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword">CanUseConsolePassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys">CanUseCustomerSecretKeys</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials">CanUseSmtpCredentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#user_id IdentityUserCapabilitiesManagement#user_id}.

---

##### `CanUseApiKeys`<sup>Optional</sup> <a name="CanUseApiKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseApiKeys"></a>

```go
CanUseApiKeys interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_api_keys IdentityUserCapabilitiesManagement#can_use_api_keys}.

---

##### `CanUseAuthTokens`<sup>Optional</sup> <a name="CanUseAuthTokens" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseAuthTokens"></a>

```go
CanUseAuthTokens interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_auth_tokens IdentityUserCapabilitiesManagement#can_use_auth_tokens}.

---

##### `CanUseConsolePassword`<sup>Optional</sup> <a name="CanUseConsolePassword" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseConsolePassword"></a>

```go
CanUseConsolePassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_console_password IdentityUserCapabilitiesManagement#can_use_console_password}.

---

##### `CanUseCustomerSecretKeys`<sup>Optional</sup> <a name="CanUseCustomerSecretKeys" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseCustomerSecretKeys"></a>

```go
CanUseCustomerSecretKeys interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_customer_secret_keys IdentityUserCapabilitiesManagement#can_use_customer_secret_keys}.

---

##### `CanUseSmtpCredentials`<sup>Optional</sup> <a name="CanUseSmtpCredentials" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.canUseSmtpCredentials"></a>

```go
CanUseSmtpCredentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#can_use_smtp_credentials IdentityUserCapabilitiesManagement#can_use_smtp_credentials}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#id IdentityUserCapabilitiesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementConfig.property.timeouts"></a>

```go
Timeouts IdentityUserCapabilitiesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts">IdentityUserCapabilitiesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#timeouts IdentityUserCapabilitiesManagement#timeouts}

---

### IdentityUserCapabilitiesManagementTimeouts <a name="IdentityUserCapabilitiesManagementTimeouts" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

&identityusercapabilitiesmanagement.IdentityUserCapabilitiesManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#create IdentityUserCapabilitiesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#delete IdentityUserCapabilitiesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_user_capabilities_management#update IdentityUserCapabilitiesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityUserCapabilitiesManagementTimeoutsOutputReference <a name="IdentityUserCapabilitiesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityusercapabilitiesmanagement"

identityusercapabilitiesmanagement.NewIdentityUserCapabilitiesManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityUserCapabilitiesManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityUserCapabilitiesManagement.IdentityUserCapabilitiesManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



