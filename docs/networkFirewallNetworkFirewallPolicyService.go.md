# `networkFirewallNetworkFirewallPolicyService` Submodule <a name="`networkFirewallNetworkFirewallPolicyService` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyService <a name="NetworkFirewallNetworkFirewallPolicyService" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service oci_network_firewall_network_firewall_policy_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NewNetworkFirewallNetworkFirewallPolicyService(scope Construct, id *string, config NetworkFirewallNetworkFirewallPolicyServiceConfig) NetworkFirewallNetworkFirewallPolicyService
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig">NetworkFirewallNetworkFirewallPolicyServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig">NetworkFirewallNetworkFirewallPolicyServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putPortRanges">PutPortRanges</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPortRanges` <a name="PutPortRanges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putPortRanges"></a>

```go
func PutPortRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putPortRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts"></a>

```go
func PutTimeouts(value NetworkFirewallNetworkFirewallPolicyServiceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NetworkFirewallNetworkFirewallPolicyService_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NetworkFirewallNetworkFirewallPolicyService_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NetworkFirewallNetworkFirewallPolicyService_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NetworkFirewallNetworkFirewallPolicyService_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkFirewallNetworkFirewallPolicyService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.parentResourceId">ParentResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRanges">PortRanges</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList">NetworkFirewallNetworkFirewallPolicyServicePortRangesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRangesInput">PortRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.parentResourceId"></a>

```go
func ParentResourceId() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRanges"></a>

```go
func PortRanges() NetworkFirewallNetworkFirewallPolicyServicePortRangesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList">NetworkFirewallNetworkFirewallPolicyServicePortRangesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeouts"></a>

```go
func Timeouts() NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyIdInput"></a>

```go
func NetworkFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `PortRangesInput`<sup>Optional</sup> <a name="PortRangesInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.portRangesInput"></a>

```go
func PortRangesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyService.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyServiceConfig <a name="NetworkFirewallNetworkFirewallPolicyServiceConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

&networkfirewallnetworkfirewallpolicyservice.NetworkFirewallNetworkFirewallPolicyServiceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkFirewallPolicyId: *string,
	PortRanges: interface{},
	Type: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#name NetworkFirewallNetworkFirewallPolicyService#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyService#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.portRanges">PortRanges</a></code> | <code>interface{}</code> | port_ranges block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#type NetworkFirewallNetworkFirewallPolicyService#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#id NetworkFirewallNetworkFirewallPolicyService#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#name NetworkFirewallNetworkFirewallPolicyService#name}.

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.networkFirewallPolicyId"></a>

```go
NetworkFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyService#network_firewall_policy_id}.

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.portRanges"></a>

```go
PortRanges interface{}
```

- *Type:* interface{}

port_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#port_ranges NetworkFirewallNetworkFirewallPolicyService#port_ranges}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#type NetworkFirewallNetworkFirewallPolicyService#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#id NetworkFirewallNetworkFirewallPolicyService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceConfig.property.timeouts"></a>

```go
Timeouts NetworkFirewallNetworkFirewallPolicyServiceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts">NetworkFirewallNetworkFirewallPolicyServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#timeouts NetworkFirewallNetworkFirewallPolicyService#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyServicePortRanges <a name="NetworkFirewallNetworkFirewallPolicyServicePortRanges" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

&networkfirewallnetworkfirewallpolicyservice.NetworkFirewallNetworkFirewallPolicyServicePortRanges {
	MinimumPort: *f64,
	MaximumPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.minimumPort">MinimumPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#minimum_port NetworkFirewallNetworkFirewallPolicyService#minimum_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.maximumPort">MaximumPort</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#maximum_port NetworkFirewallNetworkFirewallPolicyService#maximum_port}. |

---

##### `MinimumPort`<sup>Required</sup> <a name="MinimumPort" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.minimumPort"></a>

```go
MinimumPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#minimum_port NetworkFirewallNetworkFirewallPolicyService#minimum_port}.

---

##### `MaximumPort`<sup>Optional</sup> <a name="MaximumPort" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRanges.property.maximumPort"></a>

```go
MaximumPort *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#maximum_port NetworkFirewallNetworkFirewallPolicyService#maximum_port}.

---

### NetworkFirewallNetworkFirewallPolicyServiceTimeouts <a name="NetworkFirewallNetworkFirewallPolicyServiceTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

&networkfirewallnetworkfirewallpolicyservice.NetworkFirewallNetworkFirewallPolicyServiceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#create NetworkFirewallNetworkFirewallPolicyService#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#delete NetworkFirewallNetworkFirewallPolicyService#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#update NetworkFirewallNetworkFirewallPolicyService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#create NetworkFirewallNetworkFirewallPolicyService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#delete NetworkFirewallNetworkFirewallPolicyService#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_service#update NetworkFirewallNetworkFirewallPolicyService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyServicePortRangesList <a name="NetworkFirewallNetworkFirewallPolicyServicePortRangesList" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NewNetworkFirewallNetworkFirewallPolicyServicePortRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkFirewallNetworkFirewallPolicyServicePortRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.get"></a>

```go
func Get(index *f64) NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference <a name="NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NewNetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resetMaximumPort">ResetMaximumPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumPort` <a name="ResetMaximumPort" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.resetMaximumPort"></a>

```go
func ResetMaximumPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPortInput">MaximumPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPortInput">MinimumPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPort">MaximumPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPort">MinimumPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumPortInput`<sup>Optional</sup> <a name="MaximumPortInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPortInput"></a>

```go
func MaximumPortInput() *f64
```

- *Type:* *f64

---

##### `MinimumPortInput`<sup>Optional</sup> <a name="MinimumPortInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPortInput"></a>

```go
func MinimumPortInput() *f64
```

- *Type:* *f64

---

##### `MaximumPort`<sup>Required</sup> <a name="MaximumPort" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.maximumPort"></a>

```go
func MaximumPort() *f64
```

- *Type:* *f64

---

##### `MinimumPort`<sup>Required</sup> <a name="MinimumPort" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.minimumPort"></a>

```go
func MinimumPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServicePortRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicyservice"

networkfirewallnetworkfirewallpolicyservice.NewNetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyService.NetworkFirewallNetworkFirewallPolicyServiceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



