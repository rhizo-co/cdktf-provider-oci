# `usageProxySubscriptionRedeemableUser` Submodule <a name="`usageProxySubscriptionRedeemableUser` Submodule" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UsageProxySubscriptionRedeemableUser <a name="UsageProxySubscriptionRedeemableUser" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user oci_usage_proxy_subscription_redeemable_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.NewUsageProxySubscriptionRedeemableUser(scope Construct, id *string, config UsageProxySubscriptionRedeemableUserConfig) UsageProxySubscriptionRedeemableUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig">UsageProxySubscriptionRedeemableUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig">UsageProxySubscriptionRedeemableUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutItems` <a name="PutItems" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts"></a>

```go
func PutTimeouts(value UsageProxySubscriptionRedeemableUserTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserId` <a name="ResetUserId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.UsageProxySubscriptionRedeemableUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.UsageProxySubscriptionRedeemableUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.UsageProxySubscriptionRedeemableUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.UsageProxySubscriptionRedeemableUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the UsageProxySubscriptionRedeemableUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing UsageProxySubscriptionRedeemableUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the UsageProxySubscriptionRedeemableUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items"></a>

```go
func Items() UsageProxySubscriptionRedeemableUserItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts"></a>

```go
func Timeouts() UsageProxySubscriptionRedeemableUserTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UsageProxySubscriptionRedeemableUserConfig <a name="UsageProxySubscriptionRedeemableUserConfig" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

&usageproxysubscriptionredeemableuser.UsageProxySubscriptionRedeemableUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Items: interface{},
	SubscriptionId: *string,
	TenancyId: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items">Items</a></code> | <code>interface{}</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#items UsageProxySubscriptionRedeemableUser#items}

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts"></a>

```go
Timeouts UsageProxySubscriptionRedeemableUserTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#timeouts UsageProxySubscriptionRedeemableUser#timeouts}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}.

---

### UsageProxySubscriptionRedeemableUserItems <a name="UsageProxySubscriptionRedeemableUserItems" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

&usageproxysubscriptionredeemableuser.UsageProxySubscriptionRedeemableUserItems {
	EmailId: *string,
	FirstName: *string,
	LastName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId">EmailId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName">FirstName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName">LastName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}. |

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId"></a>

```go
EmailId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}.

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}.

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}.

---

### UsageProxySubscriptionRedeemableUserTimeouts <a name="UsageProxySubscriptionRedeemableUserTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

&usageproxysubscriptionredeemableuser.UsageProxySubscriptionRedeemableUserTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UsageProxySubscriptionRedeemableUserItemsList <a name="UsageProxySubscriptionRedeemableUserItemsList" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.NewUsageProxySubscriptionRedeemableUserItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UsageProxySubscriptionRedeemableUserItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get"></a>

```go
func Get(index *f64) UsageProxySubscriptionRedeemableUserItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UsageProxySubscriptionRedeemableUserItemsOutputReference <a name="UsageProxySubscriptionRedeemableUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.NewUsageProxySubscriptionRedeemableUserItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UsageProxySubscriptionRedeemableUserItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirstName` <a name="ResetFirstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName"></a>

```go
func ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput">EmailIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId">EmailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailIdInput`<sup>Optional</sup> <a name="EmailIdInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput"></a>

```go
func EmailIdInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `EmailId`<sup>Required</sup> <a name="EmailId" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId"></a>

```go
func EmailId() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UsageProxySubscriptionRedeemableUserTimeoutsOutputReference <a name="UsageProxySubscriptionRedeemableUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/usageproxysubscriptionredeemableuser"

usageproxysubscriptionredeemableuser.NewUsageProxySubscriptionRedeemableUserTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) UsageProxySubscriptionRedeemableUserTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



