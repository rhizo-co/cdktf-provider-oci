# `identityAuthenticationPolicy` Submodule <a name="`identityAuthenticationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityAuthenticationPolicy <a name="IdentityAuthenticationPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy oci_identity_authentication_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.NewIdentityAuthenticationPolicy(scope Construct, id *string, config IdentityAuthenticationPolicyConfig) IdentityAuthenticationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig">IdentityAuthenticationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig">IdentityAuthenticationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy">PutNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy">PutPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy">ResetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkPolicy` <a name="PutNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy"></a>

```go
func PutNetworkPolicy(value IdentityAuthenticationPolicyNetworkPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putNetworkPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `PutPasswordPolicy` <a name="PutPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy"></a>

```go
func PutPasswordPolicy(value IdentityAuthenticationPolicyPasswordPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putPasswordPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value IdentityAuthenticationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkPolicy` <a name="ResetNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetNetworkPolicy"></a>

```go
func ResetNetworkPolicy()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.IdentityAuthenticationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.IdentityAuthenticationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.IdentityAuthenticationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.IdentityAuthenticationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityAuthenticationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityAuthenticationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityAuthenticationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityAuthenticationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy">NetworkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicy"></a>

```go
func NetworkPolicy() IdentityAuthenticationPolicyNetworkPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference">IdentityAuthenticationPolicyNetworkPolicyOutputReference</a>

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicy"></a>

```go
func PasswordPolicy() IdentityAuthenticationPolicyPasswordPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference">IdentityAuthenticationPolicyPasswordPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeouts"></a>

```go
func Timeouts() IdentityAuthenticationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference">IdentityAuthenticationPolicyTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.networkPolicyInput"></a>

```go
func NetworkPolicyInput() IdentityAuthenticationPolicyNetworkPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() IdentityAuthenticationPolicyPasswordPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityAuthenticationPolicyConfig <a name="IdentityAuthenticationPolicyConfig" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

&identityauthenticationpolicy.IdentityAuthenticationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Id: *string,
	NetworkPolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy,
	PasswordPolicy: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy">NetworkPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | network_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | password_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#compartment_id IdentityAuthenticationPolicy#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#id IdentityAuthenticationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkPolicy`<sup>Optional</sup> <a name="NetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.networkPolicy"></a>

```go
NetworkPolicy IdentityAuthenticationPolicyNetworkPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

network_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_policy IdentityAuthenticationPolicy#network_policy}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.passwordPolicy"></a>

```go
PasswordPolicy IdentityAuthenticationPolicyPasswordPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

password_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#password_policy IdentityAuthenticationPolicy#password_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyConfig.property.timeouts"></a>

```go
Timeouts IdentityAuthenticationPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts">IdentityAuthenticationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#timeouts IdentityAuthenticationPolicy#timeouts}

---

### IdentityAuthenticationPolicyNetworkPolicy <a name="IdentityAuthenticationPolicyNetworkPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

&identityauthenticationpolicy.IdentityAuthenticationPolicyNetworkPolicy {
	NetworkSourceIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds">NetworkSourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}. |

---

##### `NetworkSourceIds`<sup>Optional</sup> <a name="NetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy.property.networkSourceIds"></a>

```go
NetworkSourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#network_source_ids IdentityAuthenticationPolicy#network_source_ids}.

---

### IdentityAuthenticationPolicyPasswordPolicy <a name="IdentityAuthenticationPolicyPasswordPolicy" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

&identityauthenticationpolicy.IdentityAuthenticationPolicyPasswordPolicy {
	IsLowercaseCharactersRequired: interface{},
	IsNumericCharactersRequired: interface{},
	IsSpecialCharactersRequired: interface{},
	IsUppercaseCharactersRequired: interface{},
	IsUsernameContainmentAllowed: interface{},
	MinimumPasswordLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired">IsLowercaseCharactersRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired">IsNumericCharactersRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired">IsSpecialCharactersRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired">IsUppercaseCharactersRequired</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed">IsUsernameContainmentAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}. |

---

##### `IsLowercaseCharactersRequired`<sup>Optional</sup> <a name="IsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isLowercaseCharactersRequired"></a>

```go
IsLowercaseCharactersRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_lowercase_characters_required IdentityAuthenticationPolicy#is_lowercase_characters_required}.

---

##### `IsNumericCharactersRequired`<sup>Optional</sup> <a name="IsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isNumericCharactersRequired"></a>

```go
IsNumericCharactersRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_numeric_characters_required IdentityAuthenticationPolicy#is_numeric_characters_required}.

---

##### `IsSpecialCharactersRequired`<sup>Optional</sup> <a name="IsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isSpecialCharactersRequired"></a>

```go
IsSpecialCharactersRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_special_characters_required IdentityAuthenticationPolicy#is_special_characters_required}.

---

##### `IsUppercaseCharactersRequired`<sup>Optional</sup> <a name="IsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUppercaseCharactersRequired"></a>

```go
IsUppercaseCharactersRequired interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_uppercase_characters_required IdentityAuthenticationPolicy#is_uppercase_characters_required}.

---

##### `IsUsernameContainmentAllowed`<sup>Optional</sup> <a name="IsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.isUsernameContainmentAllowed"></a>

```go
IsUsernameContainmentAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#is_username_containment_allowed IdentityAuthenticationPolicy#is_username_containment_allowed}.

---

##### `MinimumPasswordLength`<sup>Optional</sup> <a name="MinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy.property.minimumPasswordLength"></a>

```go
MinimumPasswordLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#minimum_password_length IdentityAuthenticationPolicy#minimum_password_length}.

---

### IdentityAuthenticationPolicyTimeouts <a name="IdentityAuthenticationPolicyTimeouts" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

&identityauthenticationpolicy.IdentityAuthenticationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#create IdentityAuthenticationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#delete IdentityAuthenticationPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/identity_authentication_policy#update IdentityAuthenticationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityAuthenticationPolicyNetworkPolicyOutputReference <a name="IdentityAuthenticationPolicyNetworkPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.NewIdentityAuthenticationPolicyNetworkPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityAuthenticationPolicyNetworkPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds">ResetNetworkSourceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkSourceIds` <a name="ResetNetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.resetNetworkSourceIds"></a>

```go
func ResetNetworkSourceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput">NetworkSourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds">NetworkSourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkSourceIdsInput`<sup>Optional</sup> <a name="NetworkSourceIdsInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIdsInput"></a>

```go
func NetworkSourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NetworkSourceIds`<sup>Required</sup> <a name="NetworkSourceIds" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.networkSourceIds"></a>

```go
func NetworkSourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityAuthenticationPolicyNetworkPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyNetworkPolicy">IdentityAuthenticationPolicyNetworkPolicy</a>

---


### IdentityAuthenticationPolicyPasswordPolicyOutputReference <a name="IdentityAuthenticationPolicyPasswordPolicyOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.NewIdentityAuthenticationPolicyPasswordPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityAuthenticationPolicyPasswordPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired">ResetIsLowercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired">ResetIsNumericCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired">ResetIsSpecialCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired">ResetIsUppercaseCharactersRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed">ResetIsUsernameContainmentAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength">ResetMinimumPasswordLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsLowercaseCharactersRequired` <a name="ResetIsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsLowercaseCharactersRequired"></a>

```go
func ResetIsLowercaseCharactersRequired()
```

##### `ResetIsNumericCharactersRequired` <a name="ResetIsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsNumericCharactersRequired"></a>

```go
func ResetIsNumericCharactersRequired()
```

##### `ResetIsSpecialCharactersRequired` <a name="ResetIsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsSpecialCharactersRequired"></a>

```go
func ResetIsSpecialCharactersRequired()
```

##### `ResetIsUppercaseCharactersRequired` <a name="ResetIsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUppercaseCharactersRequired"></a>

```go
func ResetIsUppercaseCharactersRequired()
```

##### `ResetIsUsernameContainmentAllowed` <a name="ResetIsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetIsUsernameContainmentAllowed"></a>

```go
func ResetIsUsernameContainmentAllowed()
```

##### `ResetMinimumPasswordLength` <a name="ResetMinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.resetMinimumPasswordLength"></a>

```go
func ResetMinimumPasswordLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput">IsLowercaseCharactersRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput">IsNumericCharactersRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput">IsSpecialCharactersRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput">IsUppercaseCharactersRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput">IsUsernameContainmentAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput">MinimumPasswordLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired">IsLowercaseCharactersRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired">IsNumericCharactersRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired">IsSpecialCharactersRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired">IsUppercaseCharactersRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed">IsUsernameContainmentAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength">MinimumPasswordLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsLowercaseCharactersRequiredInput`<sup>Optional</sup> <a name="IsLowercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequiredInput"></a>

```go
func IsLowercaseCharactersRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `IsNumericCharactersRequiredInput`<sup>Optional</sup> <a name="IsNumericCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequiredInput"></a>

```go
func IsNumericCharactersRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `IsSpecialCharactersRequiredInput`<sup>Optional</sup> <a name="IsSpecialCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequiredInput"></a>

```go
func IsSpecialCharactersRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `IsUppercaseCharactersRequiredInput`<sup>Optional</sup> <a name="IsUppercaseCharactersRequiredInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequiredInput"></a>

```go
func IsUppercaseCharactersRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `IsUsernameContainmentAllowedInput`<sup>Optional</sup> <a name="IsUsernameContainmentAllowedInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowedInput"></a>

```go
func IsUsernameContainmentAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumPasswordLengthInput`<sup>Optional</sup> <a name="MinimumPasswordLengthInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLengthInput"></a>

```go
func MinimumPasswordLengthInput() *f64
```

- *Type:* *f64

---

##### `IsLowercaseCharactersRequired`<sup>Required</sup> <a name="IsLowercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isLowercaseCharactersRequired"></a>

```go
func IsLowercaseCharactersRequired() interface{}
```

- *Type:* interface{}

---

##### `IsNumericCharactersRequired`<sup>Required</sup> <a name="IsNumericCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isNumericCharactersRequired"></a>

```go
func IsNumericCharactersRequired() interface{}
```

- *Type:* interface{}

---

##### `IsSpecialCharactersRequired`<sup>Required</sup> <a name="IsSpecialCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isSpecialCharactersRequired"></a>

```go
func IsSpecialCharactersRequired() interface{}
```

- *Type:* interface{}

---

##### `IsUppercaseCharactersRequired`<sup>Required</sup> <a name="IsUppercaseCharactersRequired" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUppercaseCharactersRequired"></a>

```go
func IsUppercaseCharactersRequired() interface{}
```

- *Type:* interface{}

---

##### `IsUsernameContainmentAllowed`<sup>Required</sup> <a name="IsUsernameContainmentAllowed" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.isUsernameContainmentAllowed"></a>

```go
func IsUsernameContainmentAllowed() interface{}
```

- *Type:* interface{}

---

##### `MinimumPasswordLength`<sup>Required</sup> <a name="MinimumPasswordLength" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.minimumPasswordLength"></a>

```go
func MinimumPasswordLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityAuthenticationPolicyPasswordPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyPasswordPolicy">IdentityAuthenticationPolicyPasswordPolicy</a>

---


### IdentityAuthenticationPolicyTimeoutsOutputReference <a name="IdentityAuthenticationPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/identityauthenticationpolicy"

identityauthenticationpolicy.NewIdentityAuthenticationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityAuthenticationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.identityAuthenticationPolicy.IdentityAuthenticationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



