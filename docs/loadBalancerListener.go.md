# `loadBalancerListener` Submodule <a name="`loadBalancerListener` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerListener <a name="LoadBalancerListener" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener oci_load_balancer_listener}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.NewLoadBalancerListener(scope Construct, id *string, config LoadBalancerListenerConfig) LoadBalancerListener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig">LoadBalancerListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig">LoadBalancerListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration">PutConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration">PutSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration">ResetConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames">ResetHostnameNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName">ResetPathRouteSetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName">ResetRoutingPolicyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames">ResetRuleSetNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration">ResetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionConfiguration` <a name="PutConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration"></a>

```go
func PutConnectionConfiguration(value LoadBalancerListenerConnectionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putConnectionConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `PutSslConfiguration` <a name="PutSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration"></a>

```go
func PutSslConfiguration(value LoadBalancerListenerSslConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts"></a>

```go
func PutTimeouts(value LoadBalancerListenerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

---

##### `ResetConnectionConfiguration` <a name="ResetConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetConnectionConfiguration"></a>

```go
func ResetConnectionConfiguration()
```

##### `ResetHostnameNames` <a name="ResetHostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetHostnameNames"></a>

```go
func ResetHostnameNames()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetId"></a>

```go
func ResetId()
```

##### `ResetPathRouteSetName` <a name="ResetPathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetPathRouteSetName"></a>

```go
func ResetPathRouteSetName()
```

##### `ResetRoutingPolicyName` <a name="ResetRoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRoutingPolicyName"></a>

```go
func ResetRoutingPolicyName()
```

##### `ResetRuleSetNames` <a name="ResetRuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetRuleSetNames"></a>

```go
func ResetRuleSetNames()
```

##### `ResetSslConfiguration` <a name="ResetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetSslConfiguration"></a>

```go
func ResetSslConfiguration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.LoadBalancerListener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.LoadBalancerListener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.LoadBalancerListener_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.LoadBalancerListener_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LoadBalancerListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LoadBalancerListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LoadBalancerListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput">ConnectionConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput">DefaultBackendSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput">HostnameNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput">PathRouteSetNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput">RoutingPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput">RuleSetNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput">SslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName">DefaultBackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames">HostnameNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName">PathRouteSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName">RoutingPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames">RuleSetNames</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionConfiguration`<sup>Required</sup> <a name="ConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfiguration"></a>

```go
func ConnectionConfiguration() LoadBalancerListenerConnectionConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference">LoadBalancerListenerConnectionConfigurationOutputReference</a>

---

##### `SslConfiguration`<sup>Required</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfiguration"></a>

```go
func SslConfiguration() LoadBalancerListenerSslConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference">LoadBalancerListenerSslConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeouts"></a>

```go
func Timeouts() LoadBalancerListenerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference">LoadBalancerListenerTimeoutsOutputReference</a>

---

##### `ConnectionConfigurationInput`<sup>Optional</sup> <a name="ConnectionConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.connectionConfigurationInput"></a>

```go
func ConnectionConfigurationInput() LoadBalancerListenerConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---

##### `DefaultBackendSetNameInput`<sup>Optional</sup> <a name="DefaultBackendSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetNameInput"></a>

```go
func DefaultBackendSetNameInput() *string
```

- *Type:* *string

---

##### `HostnameNamesInput`<sup>Optional</sup> <a name="HostnameNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNamesInput"></a>

```go
func HostnameNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerIdInput"></a>

```go
func LoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathRouteSetNameInput`<sup>Optional</sup> <a name="PathRouteSetNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetNameInput"></a>

```go
func PathRouteSetNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RoutingPolicyNameInput`<sup>Optional</sup> <a name="RoutingPolicyNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyNameInput"></a>

```go
func RoutingPolicyNameInput() *string
```

- *Type:* *string

---

##### `RuleSetNamesInput`<sup>Optional</sup> <a name="RuleSetNamesInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNamesInput"></a>

```go
func RuleSetNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SslConfigurationInput`<sup>Optional</sup> <a name="SslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.sslConfigurationInput"></a>

```go
func SslConfigurationInput() LoadBalancerListenerSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBackendSetName`<sup>Required</sup> <a name="DefaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.defaultBackendSetName"></a>

```go
func DefaultBackendSetName() *string
```

- *Type:* *string

---

##### `HostnameNames`<sup>Required</sup> <a name="HostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.hostnameNames"></a>

```go
func HostnameNames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PathRouteSetName`<sup>Required</sup> <a name="PathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.pathRouteSetName"></a>

```go
func PathRouteSetName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RoutingPolicyName`<sup>Required</sup> <a name="RoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.routingPolicyName"></a>

```go
func RoutingPolicyName() *string
```

- *Type:* *string

---

##### `RuleSetNames`<sup>Required</sup> <a name="RuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.ruleSetNames"></a>

```go
func RuleSetNames() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerListenerConfig <a name="LoadBalancerListenerConfig" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

&loadbalancerlistener.LoadBalancerListenerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultBackendSetName: *string,
	LoadBalancerId: *string,
	Name: *string,
	Port: *f64,
	Protocol: *string,
	ConnectionConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration,
	HostnameNames: *[]*string,
	Id: *string,
	PathRouteSetName: *string,
	RoutingPolicyName: *string,
	RuleSetNames: *[]*string,
	SslConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerListener.LoadBalancerListenerSslConfiguration,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.loadBalancerListener.LoadBalancerListenerTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName">DefaultBackendSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration">ConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | connection_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames">HostnameNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName">PathRouteSetName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName">RoutingPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames">RuleSetNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration">SslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultBackendSetName`<sup>Required</sup> <a name="DefaultBackendSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.defaultBackendSetName"></a>

```go
DefaultBackendSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#default_backend_set_name LoadBalancerListener#default_backend_set_name}.

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.loadBalancerId"></a>

```go
LoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#load_balancer_id LoadBalancerListener#load_balancer_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#name LoadBalancerListener#name}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#port LoadBalancerListener#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocol LoadBalancerListener#protocol}.

---

##### `ConnectionConfiguration`<sup>Optional</sup> <a name="ConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.connectionConfiguration"></a>

```go
ConnectionConfiguration LoadBalancerListenerConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

connection_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#connection_configuration LoadBalancerListener#connection_configuration}

---

##### `HostnameNames`<sup>Optional</sup> <a name="HostnameNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.hostnameNames"></a>

```go
HostnameNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#hostname_names LoadBalancerListener#hostname_names}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#id LoadBalancerListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PathRouteSetName`<sup>Optional</sup> <a name="PathRouteSetName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.pathRouteSetName"></a>

```go
PathRouteSetName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#path_route_set_name LoadBalancerListener#path_route_set_name}.

---

##### `RoutingPolicyName`<sup>Optional</sup> <a name="RoutingPolicyName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.routingPolicyName"></a>

```go
RoutingPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#routing_policy_name LoadBalancerListener#routing_policy_name}.

---

##### `RuleSetNames`<sup>Optional</sup> <a name="RuleSetNames" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.ruleSetNames"></a>

```go
RuleSetNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#rule_set_names LoadBalancerListener#rule_set_names}.

---

##### `SslConfiguration`<sup>Optional</sup> <a name="SslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.sslConfiguration"></a>

```go
SslConfiguration LoadBalancerListenerSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#ssl_configuration LoadBalancerListener#ssl_configuration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConfig.property.timeouts"></a>

```go
Timeouts LoadBalancerListenerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts">LoadBalancerListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#timeouts LoadBalancerListener#timeouts}

---

### LoadBalancerListenerConnectionConfiguration <a name="LoadBalancerListenerConnectionConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

&loadbalancerlistener.LoadBalancerListenerConnectionConfiguration {
	IdleTimeoutInSeconds: *string,
	BackendTcpProxyProtocolOptions: *[]*string,
	BackendTcpProxyProtocolVersion: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds">IdleTimeoutInSeconds</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions">BackendTcpProxyProtocolOptions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion">BackendTcpProxyProtocolVersion</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}. |

---

##### `IdleTimeoutInSeconds`<sup>Required</sup> <a name="IdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.idleTimeoutInSeconds"></a>

```go
IdleTimeoutInSeconds *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#idle_timeout_in_seconds LoadBalancerListener#idle_timeout_in_seconds}.

---

##### `BackendTcpProxyProtocolOptions`<sup>Optional</sup> <a name="BackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolOptions"></a>

```go
BackendTcpProxyProtocolOptions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_options LoadBalancerListener#backend_tcp_proxy_protocol_options}.

---

##### `BackendTcpProxyProtocolVersion`<sup>Optional</sup> <a name="BackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration.property.backendTcpProxyProtocolVersion"></a>

```go
BackendTcpProxyProtocolVersion *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#backend_tcp_proxy_protocol_version LoadBalancerListener#backend_tcp_proxy_protocol_version}.

---

### LoadBalancerListenerSslConfiguration <a name="LoadBalancerListenerSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

&loadbalancerlistener.LoadBalancerListenerSslConfiguration {
	CertificateIds: *[]*string,
	CertificateName: *string,
	CipherSuiteName: *string,
	HasSessionResumption: interface{},
	Protocols: *[]*string,
	ServerOrderPreference: *string,
	TrustedCertificateAuthorityIds: *[]*string,
	VerifyDepth: *f64,
	VerifyPeerCertificate: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds">CertificateIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName">CipherSuiteName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption">HasSessionResumption</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth">VerifyDepth</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}. |

---

##### `CertificateIds`<sup>Optional</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateIds"></a>

```go
CertificateIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_ids LoadBalancerListener#certificate_ids}.

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#certificate_name LoadBalancerListener#certificate_name}.

---

##### `CipherSuiteName`<sup>Optional</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.cipherSuiteName"></a>

```go
CipherSuiteName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#cipher_suite_name LoadBalancerListener#cipher_suite_name}.

---

##### `HasSessionResumption`<sup>Optional</sup> <a name="HasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.hasSessionResumption"></a>

```go
HasSessionResumption interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#has_session_resumption LoadBalancerListener#has_session_resumption}.

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#protocols LoadBalancerListener#protocols}.

---

##### `ServerOrderPreference`<sup>Optional</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.serverOrderPreference"></a>

```go
ServerOrderPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#server_order_preference LoadBalancerListener#server_order_preference}.

---

##### `TrustedCertificateAuthorityIds`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```go
TrustedCertificateAuthorityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#trusted_certificate_authority_ids LoadBalancerListener#trusted_certificate_authority_ids}.

---

##### `VerifyDepth`<sup>Optional</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyDepth"></a>

```go
VerifyDepth *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_depth LoadBalancerListener#verify_depth}.

---

##### `VerifyPeerCertificate`<sup>Optional</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration.property.verifyPeerCertificate"></a>

```go
VerifyPeerCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#verify_peer_certificate LoadBalancerListener#verify_peer_certificate}.

---

### LoadBalancerListenerTimeouts <a name="LoadBalancerListenerTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

&loadbalancerlistener.LoadBalancerListenerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#create LoadBalancerListener#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#delete LoadBalancerListener#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_listener#update LoadBalancerListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerListenerConnectionConfigurationOutputReference <a name="LoadBalancerListenerConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.NewLoadBalancerListenerConnectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerListenerConnectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions">ResetBackendTcpProxyProtocolOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion">ResetBackendTcpProxyProtocolVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackendTcpProxyProtocolOptions` <a name="ResetBackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolOptions"></a>

```go
func ResetBackendTcpProxyProtocolOptions()
```

##### `ResetBackendTcpProxyProtocolVersion` <a name="ResetBackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.resetBackendTcpProxyProtocolVersion"></a>

```go
func ResetBackendTcpProxyProtocolVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput">BackendTcpProxyProtocolOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput">BackendTcpProxyProtocolVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput">IdleTimeoutInSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions">BackendTcpProxyProtocolOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion">BackendTcpProxyProtocolVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds">IdleTimeoutInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackendTcpProxyProtocolOptionsInput`<sup>Optional</sup> <a name="BackendTcpProxyProtocolOptionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptionsInput"></a>

```go
func BackendTcpProxyProtocolOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackendTcpProxyProtocolVersionInput`<sup>Optional</sup> <a name="BackendTcpProxyProtocolVersionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersionInput"></a>

```go
func BackendTcpProxyProtocolVersionInput() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutInSecondsInput`<sup>Optional</sup> <a name="IdleTimeoutInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSecondsInput"></a>

```go
func IdleTimeoutInSecondsInput() *string
```

- *Type:* *string

---

##### `BackendTcpProxyProtocolOptions`<sup>Required</sup> <a name="BackendTcpProxyProtocolOptions" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolOptions"></a>

```go
func BackendTcpProxyProtocolOptions() *[]*string
```

- *Type:* *[]*string

---

##### `BackendTcpProxyProtocolVersion`<sup>Required</sup> <a name="BackendTcpProxyProtocolVersion" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.backendTcpProxyProtocolVersion"></a>

```go
func BackendTcpProxyProtocolVersion() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutInSeconds`<sup>Required</sup> <a name="IdleTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.idleTimeoutInSeconds"></a>

```go
func IdleTimeoutInSeconds() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerListenerConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerConnectionConfiguration">LoadBalancerListenerConnectionConfiguration</a>

---


### LoadBalancerListenerSslConfigurationOutputReference <a name="LoadBalancerListenerSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.NewLoadBalancerListenerSslConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerListenerSslConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds">ResetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName">ResetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption">ResetHasSessionResumption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference">ResetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">ResetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth">ResetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate">ResetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateIds` <a name="ResetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateIds"></a>

```go
func ResetCertificateIds()
```

##### `ResetCertificateName` <a name="ResetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetCipherSuiteName` <a name="ResetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetCipherSuiteName"></a>

```go
func ResetCipherSuiteName()
```

##### `ResetHasSessionResumption` <a name="ResetHasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetHasSessionResumption"></a>

```go
func ResetHasSessionResumption()
```

##### `ResetProtocols` <a name="ResetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetServerOrderPreference` <a name="ResetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetServerOrderPreference"></a>

```go
func ResetServerOrderPreference()
```

##### `ResetTrustedCertificateAuthorityIds` <a name="ResetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```go
func ResetTrustedCertificateAuthorityIds()
```

##### `ResetVerifyDepth` <a name="ResetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyDepth"></a>

```go
func ResetVerifyDepth()
```

##### `ResetVerifyPeerCertificate` <a name="ResetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```go
func ResetVerifyPeerCertificate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput">CertificateIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput">CipherSuiteNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput">HasSessionResumptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput">ServerOrderPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">TrustedCertificateAuthorityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput">VerifyDepthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput">VerifyPeerCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds">CertificateIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName">CipherSuiteName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption">HasSessionResumption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">TrustedCertificateAuthorityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth">VerifyDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate">VerifyPeerCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateIdsInput`<sup>Optional</sup> <a name="CertificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIdsInput"></a>

```go
func CertificateIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `CipherSuiteNameInput`<sup>Optional</sup> <a name="CipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```go
func CipherSuiteNameInput() *string
```

- *Type:* *string

---

##### `HasSessionResumptionInput`<sup>Optional</sup> <a name="HasSessionResumptionInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumptionInput"></a>

```go
func HasSessionResumptionInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServerOrderPreferenceInput`<sup>Optional</sup> <a name="ServerOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```go
func ServerOrderPreferenceInput() *string
```

- *Type:* *string

---

##### `TrustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="TrustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```go
func TrustedCertificateAuthorityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyDepthInput`<sup>Optional</sup> <a name="VerifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepthInput"></a>

```go
func VerifyDepthInput() *f64
```

- *Type:* *f64

---

##### `VerifyPeerCertificateInput`<sup>Optional</sup> <a name="VerifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```go
func VerifyPeerCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateIds`<sup>Required</sup> <a name="CertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateIds"></a>

```go
func CertificateIds() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `CipherSuiteName`<sup>Required</sup> <a name="CipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.cipherSuiteName"></a>

```go
func CipherSuiteName() *string
```

- *Type:* *string

---

##### `HasSessionResumption`<sup>Required</sup> <a name="HasSessionResumption" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.hasSessionResumption"></a>

```go
func HasSessionResumption() interface{}
```

- *Type:* interface{}

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `ServerOrderPreference`<sup>Required</sup> <a name="ServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.serverOrderPreference"></a>

```go
func ServerOrderPreference() *string
```

- *Type:* *string

---

##### `TrustedCertificateAuthorityIds`<sup>Required</sup> <a name="TrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```go
func TrustedCertificateAuthorityIds() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyDepth`<sup>Required</sup> <a name="VerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyDepth"></a>

```go
func VerifyDepth() *f64
```

- *Type:* *f64

---

##### `VerifyPeerCertificate`<sup>Required</sup> <a name="VerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```go
func VerifyPeerCertificate() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() LoadBalancerListenerSslConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerSslConfiguration">LoadBalancerListenerSslConfiguration</a>

---


### LoadBalancerListenerTimeoutsOutputReference <a name="LoadBalancerListenerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loadbalancerlistener"

loadbalancerlistener.NewLoadBalancerListenerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LoadBalancerListenerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.loadBalancerListener.LoadBalancerListenerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


