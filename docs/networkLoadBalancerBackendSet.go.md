# `networkLoadBalancerBackendSet` Submodule <a name="`networkLoadBalancerBackendSet` Submodule" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkLoadBalancerBackendSet <a name="NetworkLoadBalancerBackendSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set oci_network_load_balancer_backend_set}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NewNetworkLoadBalancerBackendSet(scope Construct, id *string, config NetworkLoadBalancerBackendSetConfig) NetworkLoadBalancerBackendSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig">NetworkLoadBalancerBackendSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig">NetworkLoadBalancerBackendSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker">PutHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen">ResetIsFailOpen</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled">ResetIsInstantFailoverEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource">ResetIsPreserveSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthChecker` <a name="PutHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker"></a>

```go
func PutHealthChecker(value NetworkLoadBalancerBackendSetHealthChecker)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts"></a>

```go
func PutTimeouts(value NetworkLoadBalancerBackendSetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetId"></a>

```go
func ResetId()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIpVersion"></a>

```go
func ResetIpVersion()
```

##### `ResetIsFailOpen` <a name="ResetIsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsFailOpen"></a>

```go
func ResetIsFailOpen()
```

##### `ResetIsInstantFailoverEnabled` <a name="ResetIsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsInstantFailoverEnabled"></a>

```go
func ResetIsInstantFailoverEnabled()
```

##### `ResetIsPreserveSource` <a name="ResetIsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetIsPreserveSource"></a>

```go
func ResetIsPreserveSource()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NetworkLoadBalancerBackendSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NetworkLoadBalancerBackendSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NetworkLoadBalancerBackendSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NetworkLoadBalancerBackendSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkLoadBalancerBackendSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkLoadBalancerBackendSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkLoadBalancerBackendSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends">Backends</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput">HealthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput">IpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput">IsFailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput">IsInstantFailoverEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput">IsPreserveSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput">NetworkLoadBalancerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion">IpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen">IsFailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled">IsInstantFailoverEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource">IsPreserveSource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backends`<sup>Required</sup> <a name="Backends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.backends"></a>

```go
func Backends() NetworkLoadBalancerBackendSetBackendsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList">NetworkLoadBalancerBackendSetBackendsList</a>

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthChecker"></a>

```go
func HealthChecker() NetworkLoadBalancerBackendSetHealthCheckerOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference">NetworkLoadBalancerBackendSetHealthCheckerOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeouts"></a>

```go
func Timeouts() NetworkLoadBalancerBackendSetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference">NetworkLoadBalancerBackendSetTimeoutsOutputReference</a>

---

##### `HealthCheckerInput`<sup>Optional</sup> <a name="HealthCheckerInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.healthCheckerInput"></a>

```go
func HealthCheckerInput() NetworkLoadBalancerBackendSetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersionInput"></a>

```go
func IpVersionInput() *string
```

- *Type:* *string

---

##### `IsFailOpenInput`<sup>Optional</sup> <a name="IsFailOpenInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpenInput"></a>

```go
func IsFailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `IsInstantFailoverEnabledInput`<sup>Optional</sup> <a name="IsInstantFailoverEnabledInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabledInput"></a>

```go
func IsInstantFailoverEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsPreserveSourceInput`<sup>Optional</sup> <a name="IsPreserveSourceInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSourceInput"></a>

```go
func IsPreserveSourceInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerIdInput`<sup>Optional</sup> <a name="NetworkLoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerIdInput"></a>

```go
func NetworkLoadBalancerIdInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.ipVersion"></a>

```go
func IpVersion() *string
```

- *Type:* *string

---

##### `IsFailOpen`<sup>Required</sup> <a name="IsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isFailOpen"></a>

```go
func IsFailOpen() interface{}
```

- *Type:* interface{}

---

##### `IsInstantFailoverEnabled`<sup>Required</sup> <a name="IsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isInstantFailoverEnabled"></a>

```go
func IsInstantFailoverEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsPreserveSource`<sup>Required</sup> <a name="IsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.isPreserveSource"></a>

```go
func IsPreserveSource() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.networkLoadBalancerId"></a>

```go
func NetworkLoadBalancerId() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkLoadBalancerBackendSetBackends <a name="NetworkLoadBalancerBackendSetBackends" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

&networkloadbalancerbackendset.NetworkLoadBalancerBackendSetBackends {

}
```


### NetworkLoadBalancerBackendSetConfig <a name="NetworkLoadBalancerBackendSetConfig" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

&networkloadbalancerbackendset.NetworkLoadBalancerBackendSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	HealthChecker: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker,
	Name: *string,
	NetworkLoadBalancerId: *string,
	Policy: *string,
	Id: *string,
	IpVersion: *string,
	IsFailOpen: interface{},
	IsInstantFailoverEnabled: interface{},
	IsPreserveSource: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker">HealthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId">NetworkLoadBalancerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion">IpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen">IsFailOpen</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled">IsInstantFailoverEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource">IsPreserveSource</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HealthChecker`<sup>Required</sup> <a name="HealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.healthChecker"></a>

```go
HealthChecker NetworkLoadBalancerBackendSetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#health_checker NetworkLoadBalancerBackendSet#health_checker}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#name NetworkLoadBalancerBackendSet#name}.

---

##### `NetworkLoadBalancerId`<sup>Required</sup> <a name="NetworkLoadBalancerId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.networkLoadBalancerId"></a>

```go
NetworkLoadBalancerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#network_load_balancer_id NetworkLoadBalancerBackendSet#network_load_balancer_id}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#policy NetworkLoadBalancerBackendSet#policy}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#id NetworkLoadBalancerBackendSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.ipVersion"></a>

```go
IpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#ip_version NetworkLoadBalancerBackendSet#ip_version}.

---

##### `IsFailOpen`<sup>Optional</sup> <a name="IsFailOpen" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isFailOpen"></a>

```go
IsFailOpen interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_fail_open NetworkLoadBalancerBackendSet#is_fail_open}.

---

##### `IsInstantFailoverEnabled`<sup>Optional</sup> <a name="IsInstantFailoverEnabled" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isInstantFailoverEnabled"></a>

```go
IsInstantFailoverEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_instant_failover_enabled NetworkLoadBalancerBackendSet#is_instant_failover_enabled}.

---

##### `IsPreserveSource`<sup>Optional</sup> <a name="IsPreserveSource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.isPreserveSource"></a>

```go
IsPreserveSource interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#is_preserve_source NetworkLoadBalancerBackendSet#is_preserve_source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetConfig.property.timeouts"></a>

```go
Timeouts NetworkLoadBalancerBackendSetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts">NetworkLoadBalancerBackendSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeouts NetworkLoadBalancerBackendSet#timeouts}

---

### NetworkLoadBalancerBackendSetHealthChecker <a name="NetworkLoadBalancerBackendSetHealthChecker" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

&networkloadbalancerbackendset.NetworkLoadBalancerBackendSetHealthChecker {
	Protocol: *string,
	Dns: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns,
	IntervalInMillis: *f64,
	Port: *f64,
	RequestData: *string,
	ResponseBodyRegex: *string,
	ResponseData: *string,
	Retries: *f64,
	ReturnCode: *f64,
	TimeoutInMillis: *f64,
	UrlPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | dns block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis">IntervalInMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData">RequestData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData">ResponseData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries">Retries</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode">ReturnCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath">UrlPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#protocol NetworkLoadBalancerBackendSet#protocol}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.dns"></a>

```go
Dns NetworkLoadBalancerBackendSetHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#dns NetworkLoadBalancerBackendSet#dns}

---

##### `IntervalInMillis`<sup>Optional</sup> <a name="IntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.intervalInMillis"></a>

```go
IntervalInMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#interval_in_millis NetworkLoadBalancerBackendSet#interval_in_millis}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#port NetworkLoadBalancerBackendSet#port}.

---

##### `RequestData`<sup>Optional</sup> <a name="RequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.requestData"></a>

```go
RequestData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#request_data NetworkLoadBalancerBackendSet#request_data}.

---

##### `ResponseBodyRegex`<sup>Optional</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseBodyRegex"></a>

```go
ResponseBodyRegex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_body_regex NetworkLoadBalancerBackendSet#response_body_regex}.

---

##### `ResponseData`<sup>Optional</sup> <a name="ResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.responseData"></a>

```go
ResponseData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#response_data NetworkLoadBalancerBackendSet#response_data}.

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.retries"></a>

```go
Retries *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#retries NetworkLoadBalancerBackendSet#retries}.

---

##### `ReturnCode`<sup>Optional</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.returnCode"></a>

```go
ReturnCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#return_code NetworkLoadBalancerBackendSet#return_code}.

---

##### `TimeoutInMillis`<sup>Optional</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.timeoutInMillis"></a>

```go
TimeoutInMillis *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#timeout_in_millis NetworkLoadBalancerBackendSet#timeout_in_millis}.

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker.property.urlPath"></a>

```go
UrlPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#url_path NetworkLoadBalancerBackendSet#url_path}.

---

### NetworkLoadBalancerBackendSetHealthCheckerDns <a name="NetworkLoadBalancerBackendSetHealthCheckerDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

&networkloadbalancerbackendset.NetworkLoadBalancerBackendSetHealthCheckerDns {
	DomainName: *string,
	QueryClass: *string,
	QueryType: *string,
	Rcodes: *[]*string,
	TransportProtocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass">QueryClass</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType">QueryType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes">Rcodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol">TransportProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}. |

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#domain_name NetworkLoadBalancerBackendSet#domain_name}.

---

##### `QueryClass`<sup>Optional</sup> <a name="QueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryClass"></a>

```go
QueryClass *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_class NetworkLoadBalancerBackendSet#query_class}.

---

##### `QueryType`<sup>Optional</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.queryType"></a>

```go
QueryType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#query_type NetworkLoadBalancerBackendSet#query_type}.

---

##### `Rcodes`<sup>Optional</sup> <a name="Rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.rcodes"></a>

```go
Rcodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#rcodes NetworkLoadBalancerBackendSet#rcodes}.

---

##### `TransportProtocol`<sup>Optional</sup> <a name="TransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns.property.transportProtocol"></a>

```go
TransportProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#transport_protocol NetworkLoadBalancerBackendSet#transport_protocol}.

---

### NetworkLoadBalancerBackendSetTimeouts <a name="NetworkLoadBalancerBackendSetTimeouts" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

&networkloadbalancerbackendset.NetworkLoadBalancerBackendSetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#create NetworkLoadBalancerBackendSet#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#delete NetworkLoadBalancerBackendSet#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_load_balancer_backend_set#update NetworkLoadBalancerBackendSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkLoadBalancerBackendSetBackendsList <a name="NetworkLoadBalancerBackendSetBackendsList" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NewNetworkLoadBalancerBackendSetBackendsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkLoadBalancerBackendSetBackendsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get"></a>

```go
func Get(index *f64) NetworkLoadBalancerBackendSetBackendsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NetworkLoadBalancerBackendSetBackendsOutputReference <a name="NetworkLoadBalancerBackendSetBackendsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NewNetworkLoadBalancerBackendSetBackendsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkLoadBalancerBackendSetBackendsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup">IsBackup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain">IsDrain</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline">IsOffline</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsBackup`<sup>Required</sup> <a name="IsBackup" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isBackup"></a>

```go
func IsBackup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDrain`<sup>Required</sup> <a name="IsDrain" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isDrain"></a>

```go
func IsDrain() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOffline`<sup>Required</sup> <a name="IsOffline" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.isOffline"></a>

```go
func IsOffline() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackendsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkLoadBalancerBackendSetBackends
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetBackends">NetworkLoadBalancerBackendSetBackends</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NewNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass">ResetQueryClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType">ResetQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes">ResetRcodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol">ResetTransportProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryClass` <a name="ResetQueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryClass"></a>

```go
func ResetQueryClass()
```

##### `ResetQueryType` <a name="ResetQueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetQueryType"></a>

```go
func ResetQueryType()
```

##### `ResetRcodes` <a name="ResetRcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetRcodes"></a>

```go
func ResetRcodes()
```

##### `ResetTransportProtocol` <a name="ResetTransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.resetTransportProtocol"></a>

```go
func ResetTransportProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput">QueryClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput">QueryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput">RcodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput">TransportProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass">QueryClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType">QueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes">Rcodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol">TransportProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `QueryClassInput`<sup>Optional</sup> <a name="QueryClassInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClassInput"></a>

```go
func QueryClassInput() *string
```

- *Type:* *string

---

##### `QueryTypeInput`<sup>Optional</sup> <a name="QueryTypeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryTypeInput"></a>

```go
func QueryTypeInput() *string
```

- *Type:* *string

---

##### `RcodesInput`<sup>Optional</sup> <a name="RcodesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodesInput"></a>

```go
func RcodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TransportProtocolInput`<sup>Optional</sup> <a name="TransportProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocolInput"></a>

```go
func TransportProtocolInput() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `QueryClass`<sup>Required</sup> <a name="QueryClass" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryClass"></a>

```go
func QueryClass() *string
```

- *Type:* *string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.queryType"></a>

```go
func QueryType() *string
```

- *Type:* *string

---

##### `Rcodes`<sup>Required</sup> <a name="Rcodes" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.rcodes"></a>

```go
func Rcodes() *[]*string
```

- *Type:* *[]*string

---

##### `TransportProtocol`<sup>Required</sup> <a name="TransportProtocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.transportProtocol"></a>

```go
func TransportProtocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkLoadBalancerBackendSetHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---


### NetworkLoadBalancerBackendSetHealthCheckerOutputReference <a name="NetworkLoadBalancerBackendSetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NewNetworkLoadBalancerBackendSetHealthCheckerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkLoadBalancerBackendSetHealthCheckerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis">ResetIntervalInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData">ResetRequestData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex">ResetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData">ResetResponseData</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode">ResetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis">ResetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns"></a>

```go
func PutDns(value NetworkLoadBalancerBackendSetHealthCheckerDns)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---

##### `ResetDns` <a name="ResetDns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetDns"></a>

```go
func ResetDns()
```

##### `ResetIntervalInMillis` <a name="ResetIntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetIntervalInMillis"></a>

```go
func ResetIntervalInMillis()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetRequestData` <a name="ResetRequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRequestData"></a>

```go
func ResetRequestData()
```

##### `ResetResponseBodyRegex` <a name="ResetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```go
func ResetResponseBodyRegex()
```

##### `ResetResponseData` <a name="ResetResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetResponseData"></a>

```go
func ResetResponseData()
```

##### `ResetRetries` <a name="ResetRetries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetRetries"></a>

```go
func ResetRetries()
```

##### `ResetReturnCode` <a name="ResetReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetReturnCode"></a>

```go
func ResetReturnCode()
```

##### `ResetTimeoutInMillis` <a name="ResetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```go
func ResetTimeoutInMillis()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.resetUrlPath"></a>

```go
func ResetUrlPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns">Dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput">IntervalInMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput">RequestDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput">ResponseBodyRegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput">ResponseDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput">RetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput">ReturnCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput">TimeoutInMillisInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput">UrlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis">IntervalInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData">RequestData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex">ResponseBodyRegex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData">ResponseData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries">Retries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode">ReturnCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis">TimeoutInMillis</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath">UrlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dns"></a>

```go
func Dns() NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference">NetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.dnsInput"></a>

```go
func DnsInput() NetworkLoadBalancerBackendSetHealthCheckerDns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerDns">NetworkLoadBalancerBackendSetHealthCheckerDns</a>

---

##### `IntervalInMillisInput`<sup>Optional</sup> <a name="IntervalInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillisInput"></a>

```go
func IntervalInMillisInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RequestDataInput`<sup>Optional</sup> <a name="RequestDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestDataInput"></a>

```go
func RequestDataInput() *string
```

- *Type:* *string

---

##### `ResponseBodyRegexInput`<sup>Optional</sup> <a name="ResponseBodyRegexInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```go
func ResponseBodyRegexInput() *string
```

- *Type:* *string

---

##### `ResponseDataInput`<sup>Optional</sup> <a name="ResponseDataInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseDataInput"></a>

```go
func ResponseDataInput() *string
```

- *Type:* *string

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retriesInput"></a>

```go
func RetriesInput() *f64
```

- *Type:* *f64

---

##### `ReturnCodeInput`<sup>Optional</sup> <a name="ReturnCodeInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCodeInput"></a>

```go
func ReturnCodeInput() *f64
```

- *Type:* *f64

---

##### `TimeoutInMillisInput`<sup>Optional</sup> <a name="TimeoutInMillisInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```go
func TimeoutInMillisInput() *f64
```

- *Type:* *f64

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPathInput"></a>

```go
func UrlPathInput() *string
```

- *Type:* *string

---

##### `IntervalInMillis`<sup>Required</sup> <a name="IntervalInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.intervalInMillis"></a>

```go
func IntervalInMillis() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RequestData`<sup>Required</sup> <a name="RequestData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.requestData"></a>

```go
func RequestData() *string
```

- *Type:* *string

---

##### `ResponseBodyRegex`<sup>Required</sup> <a name="ResponseBodyRegex" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```go
func ResponseBodyRegex() *string
```

- *Type:* *string

---

##### `ResponseData`<sup>Required</sup> <a name="ResponseData" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.responseData"></a>

```go
func ResponseData() *string
```

- *Type:* *string

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.retries"></a>

```go
func Retries() *f64
```

- *Type:* *f64

---

##### `ReturnCode`<sup>Required</sup> <a name="ReturnCode" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.returnCode"></a>

```go
func ReturnCode() *f64
```

- *Type:* *f64

---

##### `TimeoutInMillis`<sup>Required</sup> <a name="TimeoutInMillis" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```go
func TimeoutInMillis() *f64
```

- *Type:* *f64

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.urlPath"></a>

```go
func UrlPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthCheckerOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkLoadBalancerBackendSetHealthChecker
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetHealthChecker">NetworkLoadBalancerBackendSetHealthChecker</a>

---


### NetworkLoadBalancerBackendSetTimeoutsOutputReference <a name="NetworkLoadBalancerBackendSetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkloadbalancerbackendset"

networkloadbalancerbackendset.NewNetworkLoadBalancerBackendSetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkLoadBalancerBackendSetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkLoadBalancerBackendSet.NetworkLoadBalancerBackendSetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



