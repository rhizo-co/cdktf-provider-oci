# `dnsSteeringPolicy` Submodule <a name="`dnsSteeringPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsSteeringPolicy <a name="DnsSteeringPolicy" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy oci_dns_steering_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicy(scope Construct, id *string, config DnsSteeringPolicyConfig) DnsSteeringPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig">DnsSteeringPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig">DnsSteeringPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers">PutAnswers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetAnswers">ResetAnswers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetHealthCheckMonitorId">ResetHealthCheckMonitorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnswers` <a name="PutAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers"></a>

```go
func PutAnswers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putAnswers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts"></a>

```go
func PutTimeouts(value DnsSteeringPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

---

##### `ResetAnswers` <a name="ResetAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetAnswers"></a>

```go
func ResetAnswers()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHealthCheckMonitorId` <a name="ResetHealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetHealthCheckMonitorId"></a>

```go
func ResetHealthCheckMonitorId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsSteeringPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.DnsSteeringPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.DnsSteeringPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.DnsSteeringPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.DnsSteeringPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsSteeringPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsSteeringPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsSteeringPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsSteeringPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answers">Answers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList">DnsSteeringPolicyAnswersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList">DnsSteeringPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.selfAttribute">SelfAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference">DnsSteeringPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answersInput">AnswersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorIdInput">HealthCheckMonitorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorId">HealthCheckMonitorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Answers`<sup>Required</sup> <a name="Answers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answers"></a>

```go
func Answers() DnsSteeringPolicyAnswersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList">DnsSteeringPolicyAnswersList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rules"></a>

```go
func Rules() DnsSteeringPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList">DnsSteeringPolicyRulesList</a>

---

##### `SelfAttribute`<sup>Required</sup> <a name="SelfAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.selfAttribute"></a>

```go
func SelfAttribute() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeouts"></a>

```go
func Timeouts() DnsSteeringPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference">DnsSteeringPolicyTimeoutsOutputReference</a>

---

##### `AnswersInput`<sup>Optional</sup> <a name="AnswersInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.answersInput"></a>

```go
func AnswersInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HealthCheckMonitorIdInput`<sup>Optional</sup> <a name="HealthCheckMonitorIdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorIdInput"></a>

```go
func HealthCheckMonitorIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HealthCheckMonitorId`<sup>Required</sup> <a name="HealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.healthCheckMonitorId"></a>

```go
func HealthCheckMonitorId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsSteeringPolicyAnswers <a name="DnsSteeringPolicyAnswers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

&dnssteeringpolicy.DnsSteeringPolicyAnswers {
	Name: *string,
	Rdata: *string,
	Rtype: *string,
	IsDisabled: interface{},
	Pool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#name DnsSteeringPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rdata">Rdata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rdata DnsSteeringPolicy#rdata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rtype">Rtype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rtype DnsSteeringPolicy#rtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#is_disabled DnsSteeringPolicy#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.pool">Pool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#pool DnsSteeringPolicy#pool}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#name DnsSteeringPolicy#name}.

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rdata"></a>

```go
Rdata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rdata DnsSteeringPolicy#rdata}.

---

##### `Rtype`<sup>Required</sup> <a name="Rtype" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.rtype"></a>

```go
Rtype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rtype DnsSteeringPolicy#rtype}.

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.isDisabled"></a>

```go
IsDisabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#is_disabled DnsSteeringPolicy#is_disabled}.

---

##### `Pool`<sup>Optional</sup> <a name="Pool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswers.property.pool"></a>

```go
Pool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#pool DnsSteeringPolicy#pool}.

---

### DnsSteeringPolicyConfig <a name="DnsSteeringPolicyConfig" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

&dnssteeringpolicy.DnsSteeringPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Template: *string,
	Answers: interface{},
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	HealthCheckMonitorId: *string,
	Id: *string,
	Rules: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.answers">Answers</a></code> | <code>interface{}</code> | answers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.healthCheckMonitorId">HealthCheckMonitorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.ttl">Ttl</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#compartment_id DnsSteeringPolicy#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#display_name DnsSteeringPolicy#display_name}.

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#template DnsSteeringPolicy#template}.

---

##### `Answers`<sup>Optional</sup> <a name="Answers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.answers"></a>

```go
Answers interface{}
```

- *Type:* interface{}

answers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answers DnsSteeringPolicy#answers}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#defined_tags DnsSteeringPolicy#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#freeform_tags DnsSteeringPolicy#freeform_tags}.

---

##### `HealthCheckMonitorId`<sup>Optional</sup> <a name="HealthCheckMonitorId" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.healthCheckMonitorId"></a>

```go
HealthCheckMonitorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#health_check_monitor_id DnsSteeringPolicy#health_check_monitor_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#id DnsSteeringPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rules DnsSteeringPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.timeouts"></a>

```go
Timeouts DnsSteeringPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts">DnsSteeringPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#timeouts DnsSteeringPolicy#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyConfig.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#ttl DnsSteeringPolicy#ttl}.

---

### DnsSteeringPolicyRules <a name="DnsSteeringPolicyRules" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

&dnssteeringpolicy.DnsSteeringPolicyRules {
	RuleType: *string,
	Cases: interface{},
	DefaultAnswerData: interface{},
	DefaultCount: *f64,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.ruleType">RuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rule_type DnsSteeringPolicy#rule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.cases">Cases</a></code> | <code>interface{}</code> | cases block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultAnswerData">DefaultAnswerData</a></code> | <code>interface{}</code> | default_answer_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultCount">DefaultCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_count DnsSteeringPolicy#default_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#description DnsSteeringPolicy#description}. |

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.ruleType"></a>

```go
RuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#rule_type DnsSteeringPolicy#rule_type}.

---

##### `Cases`<sup>Optional</sup> <a name="Cases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.cases"></a>

```go
Cases interface{}
```

- *Type:* interface{}

cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#cases DnsSteeringPolicy#cases}

---

##### `DefaultAnswerData`<sup>Optional</sup> <a name="DefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultAnswerData"></a>

```go
DefaultAnswerData interface{}
```

- *Type:* interface{}

default_answer_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_answer_data DnsSteeringPolicy#default_answer_data}

---

##### `DefaultCount`<sup>Optional</sup> <a name="DefaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.defaultCount"></a>

```go
DefaultCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#default_count DnsSteeringPolicy#default_count}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#description DnsSteeringPolicy#description}.

---

### DnsSteeringPolicyRulesCases <a name="DnsSteeringPolicyRulesCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

&dnssteeringpolicy.DnsSteeringPolicyRulesCases {
	AnswerData: interface{},
	CaseCondition: *string,
	Count: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.answerData">AnswerData</a></code> | <code>interface{}</code> | answer_data block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.caseCondition">CaseCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#case_condition DnsSteeringPolicy#case_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#count DnsSteeringPolicy#count}. |

---

##### `AnswerData`<sup>Optional</sup> <a name="AnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.answerData"></a>

```go
AnswerData interface{}
```

- *Type:* interface{}

answer_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_data DnsSteeringPolicy#answer_data}

---

##### `CaseCondition`<sup>Optional</sup> <a name="CaseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.caseCondition"></a>

```go
CaseCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#case_condition DnsSteeringPolicy#case_condition}.

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCases.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#count DnsSteeringPolicy#count}.

---

### DnsSteeringPolicyRulesCasesAnswerData <a name="DnsSteeringPolicyRulesCasesAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

&dnssteeringpolicy.DnsSteeringPolicyRulesCasesAnswerData {
	AnswerCondition: *string,
	ShouldKeep: interface{},
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.answerCondition">AnswerCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.shouldKeep">ShouldKeep</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}. |

---

##### `AnswerCondition`<sup>Optional</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.answerCondition"></a>

```go
AnswerCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}.

---

##### `ShouldKeep`<sup>Optional</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.shouldKeep"></a>

```go
ShouldKeep interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerData.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}.

---

### DnsSteeringPolicyRulesDefaultAnswerData <a name="DnsSteeringPolicyRulesDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

&dnssteeringpolicy.DnsSteeringPolicyRulesDefaultAnswerData {
	AnswerCondition: *string,
	ShouldKeep: interface{},
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.answerCondition">AnswerCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.shouldKeep">ShouldKeep</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}. |

---

##### `AnswerCondition`<sup>Optional</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.answerCondition"></a>

```go
AnswerCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#answer_condition DnsSteeringPolicy#answer_condition}.

---

##### `ShouldKeep`<sup>Optional</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.shouldKeep"></a>

```go
ShouldKeep interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#should_keep DnsSteeringPolicy#should_keep}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerData.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#value DnsSteeringPolicy#value}.

---

### DnsSteeringPolicyTimeouts <a name="DnsSteeringPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

&dnssteeringpolicy.DnsSteeringPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#create DnsSteeringPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#delete DnsSteeringPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#update DnsSteeringPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#create DnsSteeringPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#delete DnsSteeringPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_steering_policy#update DnsSteeringPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsSteeringPolicyAnswersList <a name="DnsSteeringPolicyAnswersList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyAnswersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsSteeringPolicyAnswersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get"></a>

```go
func Get(index *f64) DnsSteeringPolicyAnswersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyAnswersOutputReference <a name="DnsSteeringPolicyAnswersOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyAnswersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsSteeringPolicyAnswersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetPool">ResetPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetIsDisabled"></a>

```go
func ResetIsDisabled()
```

##### `ResetPool` <a name="ResetPool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.resetPool"></a>

```go
func ResetPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabledInput">IsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.poolInput">PoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdataInput">RdataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtypeInput">RtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.pool">Pool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdata">Rdata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtype">Rtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabledInput"></a>

```go
func IsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PoolInput`<sup>Optional</sup> <a name="PoolInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.poolInput"></a>

```go
func PoolInput() *string
```

- *Type:* *string

---

##### `RdataInput`<sup>Optional</sup> <a name="RdataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdataInput"></a>

```go
func RdataInput() *string
```

- *Type:* *string

---

##### `RtypeInput`<sup>Optional</sup> <a name="RtypeInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtypeInput"></a>

```go
func RtypeInput() *string
```

- *Type:* *string

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.isDisabled"></a>

```go
func IsDisabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pool`<sup>Required</sup> <a name="Pool" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.pool"></a>

```go
func Pool() *string
```

- *Type:* *string

---

##### `Rdata`<sup>Required</sup> <a name="Rdata" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rdata"></a>

```go
func Rdata() *string
```

- *Type:* *string

---

##### `Rtype`<sup>Required</sup> <a name="Rtype" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.rtype"></a>

```go
func Rtype() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyAnswersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesCasesAnswerDataList <a name="DnsSteeringPolicyRulesCasesAnswerDataList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesCasesAnswerDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsSteeringPolicyRulesCasesAnswerDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get"></a>

```go
func Get(index *f64) DnsSteeringPolicyRulesCasesAnswerDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesCasesAnswerDataOutputReference <a name="DnsSteeringPolicyRulesCasesAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesCasesAnswerDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsSteeringPolicyRulesCasesAnswerDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetAnswerCondition">ResetAnswerCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetShouldKeep">ResetShouldKeep</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnswerCondition` <a name="ResetAnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetAnswerCondition"></a>

```go
func ResetAnswerCondition()
```

##### `ResetShouldKeep` <a name="ResetShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetShouldKeep"></a>

```go
func ResetShouldKeep()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerConditionInput">AnswerConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeepInput">ShouldKeepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition">AnswerCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep">ShouldKeep</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnswerConditionInput`<sup>Optional</sup> <a name="AnswerConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerConditionInput"></a>

```go
func AnswerConditionInput() *string
```

- *Type:* *string

---

##### `ShouldKeepInput`<sup>Optional</sup> <a name="ShouldKeepInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeepInput"></a>

```go
func ShouldKeepInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `AnswerCondition`<sup>Required</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.answerCondition"></a>

```go
func AnswerCondition() *string
```

- *Type:* *string

---

##### `ShouldKeep`<sup>Required</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.shouldKeep"></a>

```go
func ShouldKeep() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesCasesList <a name="DnsSteeringPolicyRulesCasesList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesCasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsSteeringPolicyRulesCasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get"></a>

```go
func Get(index *f64) DnsSteeringPolicyRulesCasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesCasesOutputReference <a name="DnsSteeringPolicyRulesCasesOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesCasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsSteeringPolicyRulesCasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData">PutAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetAnswerData">ResetAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCaseCondition">ResetCaseCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnswerData` <a name="PutAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData"></a>

```go
func PutAnswerData(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.putAnswerData.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnswerData` <a name="ResetAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetAnswerData"></a>

```go
func ResetAnswerData()
```

##### `ResetCaseCondition` <a name="ResetCaseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCaseCondition"></a>

```go
func ResetCaseCondition()
```

##### `ResetCount` <a name="ResetCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.resetCount"></a>

```go
func ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerData">AnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList">DnsSteeringPolicyRulesCasesAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerDataInput">AnswerDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseConditionInput">CaseConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseCondition">CaseCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnswerData`<sup>Required</sup> <a name="AnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerData"></a>

```go
func AnswerData() DnsSteeringPolicyRulesCasesAnswerDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesAnswerDataList">DnsSteeringPolicyRulesCasesAnswerDataList</a>

---

##### `AnswerDataInput`<sup>Optional</sup> <a name="AnswerDataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.answerDataInput"></a>

```go
func AnswerDataInput() interface{}
```

- *Type:* interface{}

---

##### `CaseConditionInput`<sup>Optional</sup> <a name="CaseConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseConditionInput"></a>

```go
func CaseConditionInput() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `CaseCondition`<sup>Required</sup> <a name="CaseCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.caseCondition"></a>

```go
func CaseCondition() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesDefaultAnswerDataList <a name="DnsSteeringPolicyRulesDefaultAnswerDataList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesDefaultAnswerDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsSteeringPolicyRulesDefaultAnswerDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get"></a>

```go
func Get(index *f64) DnsSteeringPolicyRulesDefaultAnswerDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesDefaultAnswerDataOutputReference <a name="DnsSteeringPolicyRulesDefaultAnswerDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesDefaultAnswerDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsSteeringPolicyRulesDefaultAnswerDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetAnswerCondition">ResetAnswerCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetShouldKeep">ResetShouldKeep</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnswerCondition` <a name="ResetAnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetAnswerCondition"></a>

```go
func ResetAnswerCondition()
```

##### `ResetShouldKeep` <a name="ResetShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetShouldKeep"></a>

```go
func ResetShouldKeep()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerConditionInput">AnswerConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeepInput">ShouldKeepInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition">AnswerCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep">ShouldKeep</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnswerConditionInput`<sup>Optional</sup> <a name="AnswerConditionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerConditionInput"></a>

```go
func AnswerConditionInput() *string
```

- *Type:* *string

---

##### `ShouldKeepInput`<sup>Optional</sup> <a name="ShouldKeepInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeepInput"></a>

```go
func ShouldKeepInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `AnswerCondition`<sup>Required</sup> <a name="AnswerCondition" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.answerCondition"></a>

```go
func AnswerCondition() *string
```

- *Type:* *string

---

##### `ShouldKeep`<sup>Required</sup> <a name="ShouldKeep" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.shouldKeep"></a>

```go
func ShouldKeep() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesList <a name="DnsSteeringPolicyRulesList" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsSteeringPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get"></a>

```go
func Get(index *f64) DnsSteeringPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyRulesOutputReference <a name="DnsSteeringPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsSteeringPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases">PutCases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData">PutDefaultAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetCases">ResetCases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultAnswerData">ResetDefaultAnswerData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultCount">ResetDefaultCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCases` <a name="PutCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases"></a>

```go
func PutCases(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putCases.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultAnswerData` <a name="PutDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData"></a>

```go
func PutDefaultAnswerData(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.putDefaultAnswerData.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCases` <a name="ResetCases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetCases"></a>

```go
func ResetCases()
```

##### `ResetDefaultAnswerData` <a name="ResetDefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultAnswerData"></a>

```go
func ResetDefaultAnswerData()
```

##### `ResetDefaultCount` <a name="ResetDefaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDefaultCount"></a>

```go
func ResetDefaultCount()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.cases">Cases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList">DnsSteeringPolicyRulesCasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerData">DefaultAnswerData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList">DnsSteeringPolicyRulesDefaultAnswerDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.casesInput">CasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerDataInput">DefaultAnswerDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCountInput">DefaultCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleTypeInput">RuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCount">DefaultCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleType">RuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cases`<sup>Required</sup> <a name="Cases" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.cases"></a>

```go
func Cases() DnsSteeringPolicyRulesCasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesCasesList">DnsSteeringPolicyRulesCasesList</a>

---

##### `DefaultAnswerData`<sup>Required</sup> <a name="DefaultAnswerData" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerData"></a>

```go
func DefaultAnswerData() DnsSteeringPolicyRulesDefaultAnswerDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesDefaultAnswerDataList">DnsSteeringPolicyRulesDefaultAnswerDataList</a>

---

##### `CasesInput`<sup>Optional</sup> <a name="CasesInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.casesInput"></a>

```go
func CasesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAnswerDataInput`<sup>Optional</sup> <a name="DefaultAnswerDataInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultAnswerDataInput"></a>

```go
func DefaultAnswerDataInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultCountInput`<sup>Optional</sup> <a name="DefaultCountInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCountInput"></a>

```go
func DefaultCountInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleTypeInput"></a>

```go
func RuleTypeInput() *string
```

- *Type:* *string

---

##### `DefaultCount`<sup>Required</sup> <a name="DefaultCount" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.defaultCount"></a>

```go
func DefaultCount() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.ruleType"></a>

```go
func RuleType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsSteeringPolicyTimeoutsOutputReference <a name="DnsSteeringPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dnssteeringpolicy"

dnssteeringpolicy.NewDnsSteeringPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsSteeringPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dnsSteeringPolicy.DnsSteeringPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



