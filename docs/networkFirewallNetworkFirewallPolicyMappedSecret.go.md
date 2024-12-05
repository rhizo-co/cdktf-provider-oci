# `networkFirewallNetworkFirewallPolicyMappedSecret` Submodule <a name="`networkFirewallNetworkFirewallPolicyMappedSecret` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyMappedSecret <a name="NetworkFirewallNetworkFirewallPolicyMappedSecret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret oci_network_firewall_network_firewall_policy_mapped_secret}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

networkfirewallnetworkfirewallpolicymappedsecret.NewNetworkFirewallNetworkFirewallPolicyMappedSecret(scope Construct, id *string, config NetworkFirewallNetworkFirewallPolicyMappedSecretConfig) NetworkFirewallNetworkFirewallPolicyMappedSecret
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig">NetworkFirewallNetworkFirewallPolicyMappedSecretConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig">NetworkFirewallNetworkFirewallPolicyMappedSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts"></a>

```go
func PutTimeouts(value NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyMappedSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

networkfirewallnetworkfirewallpolicymappedsecret.NetworkFirewallNetworkFirewallPolicyMappedSecret_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

networkfirewallnetworkfirewallpolicymappedsecret.NetworkFirewallNetworkFirewallPolicyMappedSecret_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

networkfirewallnetworkfirewallpolicymappedsecret.NetworkFirewallNetworkFirewallPolicyMappedSecret_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

networkfirewallnetworkfirewallpolicymappedsecret.NetworkFirewallNetworkFirewallPolicyMappedSecret_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyMappedSecret resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyMappedSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkFirewallNetworkFirewallPolicyMappedSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyMappedSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.parentResourceId">ParentResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretIdInput">VaultSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumberInput">VersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.parentResourceId"></a>

```go
func ParentResourceId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeouts"></a>

```go
func Timeouts() NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyIdInput"></a>

```go
func NetworkFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VaultSecretIdInput`<sup>Optional</sup> <a name="VaultSecretIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretIdInput"></a>

```go
func VaultSecretIdInput() *string
```

- *Type:* *string

---

##### `VersionNumberInput`<sup>Optional</sup> <a name="VersionNumberInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumberInput"></a>

```go
func VersionNumberInput() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.vaultSecretId"></a>

```go
func VaultSecretId() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecret.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyMappedSecretConfig <a name="NetworkFirewallNetworkFirewallPolicyMappedSecretConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

&networkfirewallnetworkfirewallpolicymappedsecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkFirewallPolicyId: *string,
	Source: *string,
	Type: *string,
	VaultSecretId: *string,
	VersionNumber: *f64,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#name NetworkFirewallNetworkFirewallPolicyMappedSecret#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyMappedSecret#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#source NetworkFirewallNetworkFirewallPolicyMappedSecret#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#type NetworkFirewallNetworkFirewallPolicyMappedSecret#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#vault_secret_id NetworkFirewallNetworkFirewallPolicyMappedSecret#vault_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#version_number NetworkFirewallNetworkFirewallPolicyMappedSecret#version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#id NetworkFirewallNetworkFirewallPolicyMappedSecret#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#name NetworkFirewallNetworkFirewallPolicyMappedSecret#name}.

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.networkFirewallPolicyId"></a>

```go
NetworkFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyMappedSecret#network_firewall_policy_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#source NetworkFirewallNetworkFirewallPolicyMappedSecret#source}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#type NetworkFirewallNetworkFirewallPolicyMappedSecret#type}.

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.vaultSecretId"></a>

```go
VaultSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#vault_secret_id NetworkFirewallNetworkFirewallPolicyMappedSecret#vault_secret_id}.

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.versionNumber"></a>

```go
VersionNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#version_number NetworkFirewallNetworkFirewallPolicyMappedSecret#version_number}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#id NetworkFirewallNetworkFirewallPolicyMappedSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretConfig.property.timeouts"></a>

```go
Timeouts NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts">NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#timeouts NetworkFirewallNetworkFirewallPolicyMappedSecret#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts <a name="NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

&networkfirewallnetworkfirewallpolicymappedsecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#create NetworkFirewallNetworkFirewallPolicyMappedSecret#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#delete NetworkFirewallNetworkFirewallPolicyMappedSecret#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#update NetworkFirewallNetworkFirewallPolicyMappedSecret#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#create NetworkFirewallNetworkFirewallPolicyMappedSecret#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#delete NetworkFirewallNetworkFirewallPolicyMappedSecret#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_mapped_secret#update NetworkFirewallNetworkFirewallPolicyMappedSecret#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicymappedsecret"

networkfirewallnetworkfirewallpolicymappedsecret.NewNetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyMappedSecret.NetworkFirewallNetworkFirewallPolicyMappedSecretTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



