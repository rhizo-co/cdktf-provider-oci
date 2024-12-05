# `networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule <a name="`networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfile <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

networkfirewallnetworkfirewallpolicydecryptionprofile.NewNetworkFirewallNetworkFirewallPolicyDecryptionProfile(scope Construct, id *string, config NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig) NetworkFirewallNetworkFirewallPolicyDecryptionProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig">NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig">NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted">ResetAreCertificateExtensionsRestricted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName">ResetIsAutoIncludeAltName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked">ResetIsExpiredCertificateBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked">ResetIsOutOfCapacityBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked">ResetIsRevocationStatusTimeoutBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked">ResetIsUnknownRevocationStatusBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked">ResetIsUnsupportedCipherBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked">ResetIsUnsupportedVersionBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked">ResetIsUntrustedIssuerBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts"></a>

```go
func PutTimeouts(value NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---

##### `ResetAreCertificateExtensionsRestricted` <a name="ResetAreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted"></a>

```go
func ResetAreCertificateExtensionsRestricted()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAutoIncludeAltName` <a name="ResetIsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName"></a>

```go
func ResetIsAutoIncludeAltName()
```

##### `ResetIsExpiredCertificateBlocked` <a name="ResetIsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked"></a>

```go
func ResetIsExpiredCertificateBlocked()
```

##### `ResetIsOutOfCapacityBlocked` <a name="ResetIsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked"></a>

```go
func ResetIsOutOfCapacityBlocked()
```

##### `ResetIsRevocationStatusTimeoutBlocked` <a name="ResetIsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked"></a>

```go
func ResetIsRevocationStatusTimeoutBlocked()
```

##### `ResetIsUnknownRevocationStatusBlocked` <a name="ResetIsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked"></a>

```go
func ResetIsUnknownRevocationStatusBlocked()
```

##### `ResetIsUnsupportedCipherBlocked` <a name="ResetIsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked"></a>

```go
func ResetIsUnsupportedCipherBlocked()
```

##### `ResetIsUnsupportedVersionBlocked` <a name="ResetIsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked"></a>

```go
func ResetIsUnsupportedVersionBlocked()
```

##### `ResetIsUntrustedIssuerBlocked` <a name="ResetIsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked"></a>

```go
func ResetIsUntrustedIssuerBlocked()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

networkfirewallnetworkfirewallpolicydecryptionprofile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

networkfirewallnetworkfirewallpolicydecryptionprofile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

networkfirewallnetworkfirewallpolicydecryptionprofile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

networkfirewallnetworkfirewallpolicydecryptionprofile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId">ParentResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput">AreCertificateExtensionsRestrictedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput">IsAutoIncludeAltNameInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput">IsExpiredCertificateBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput">IsOutOfCapacityBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput">IsRevocationStatusTimeoutBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput">IsUnknownRevocationStatusBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput">IsUnsupportedCipherBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput">IsUnsupportedVersionBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput">IsUntrustedIssuerBlockedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted">AreCertificateExtensionsRestricted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName">IsAutoIncludeAltName</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked">IsExpiredCertificateBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked">IsOutOfCapacityBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked">IsRevocationStatusTimeoutBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked">IsUnknownRevocationStatusBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked">IsUnsupportedCipherBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked">IsUnsupportedVersionBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked">IsUntrustedIssuerBlocked</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId"></a>

```go
func ParentResourceId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts"></a>

```go
func Timeouts() NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a>

---

##### `AreCertificateExtensionsRestrictedInput`<sup>Optional</sup> <a name="AreCertificateExtensionsRestrictedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput"></a>

```go
func AreCertificateExtensionsRestrictedInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAutoIncludeAltNameInput`<sup>Optional</sup> <a name="IsAutoIncludeAltNameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput"></a>

```go
func IsAutoIncludeAltNameInput() interface{}
```

- *Type:* interface{}

---

##### `IsExpiredCertificateBlockedInput`<sup>Optional</sup> <a name="IsExpiredCertificateBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput"></a>

```go
func IsExpiredCertificateBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `IsOutOfCapacityBlockedInput`<sup>Optional</sup> <a name="IsOutOfCapacityBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput"></a>

```go
func IsOutOfCapacityBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `IsRevocationStatusTimeoutBlockedInput`<sup>Optional</sup> <a name="IsRevocationStatusTimeoutBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput"></a>

```go
func IsRevocationStatusTimeoutBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `IsUnknownRevocationStatusBlockedInput`<sup>Optional</sup> <a name="IsUnknownRevocationStatusBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput"></a>

```go
func IsUnknownRevocationStatusBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `IsUnsupportedCipherBlockedInput`<sup>Optional</sup> <a name="IsUnsupportedCipherBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput"></a>

```go
func IsUnsupportedCipherBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `IsUnsupportedVersionBlockedInput`<sup>Optional</sup> <a name="IsUnsupportedVersionBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput"></a>

```go
func IsUnsupportedVersionBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `IsUntrustedIssuerBlockedInput`<sup>Optional</sup> <a name="IsUntrustedIssuerBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput"></a>

```go
func IsUntrustedIssuerBlockedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput"></a>

```go
func NetworkFirewallPolicyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AreCertificateExtensionsRestricted`<sup>Required</sup> <a name="AreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted"></a>

```go
func AreCertificateExtensionsRestricted() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAutoIncludeAltName`<sup>Required</sup> <a name="IsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName"></a>

```go
func IsAutoIncludeAltName() interface{}
```

- *Type:* interface{}

---

##### `IsExpiredCertificateBlocked`<sup>Required</sup> <a name="IsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked"></a>

```go
func IsExpiredCertificateBlocked() interface{}
```

- *Type:* interface{}

---

##### `IsOutOfCapacityBlocked`<sup>Required</sup> <a name="IsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked"></a>

```go
func IsOutOfCapacityBlocked() interface{}
```

- *Type:* interface{}

---

##### `IsRevocationStatusTimeoutBlocked`<sup>Required</sup> <a name="IsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked"></a>

```go
func IsRevocationStatusTimeoutBlocked() interface{}
```

- *Type:* interface{}

---

##### `IsUnknownRevocationStatusBlocked`<sup>Required</sup> <a name="IsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked"></a>

```go
func IsUnknownRevocationStatusBlocked() interface{}
```

- *Type:* interface{}

---

##### `IsUnsupportedCipherBlocked`<sup>Required</sup> <a name="IsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked"></a>

```go
func IsUnsupportedCipherBlocked() interface{}
```

- *Type:* interface{}

---

##### `IsUnsupportedVersionBlocked`<sup>Required</sup> <a name="IsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked"></a>

```go
func IsUnsupportedVersionBlocked() interface{}
```

- *Type:* interface{}

---

##### `IsUntrustedIssuerBlocked`<sup>Required</sup> <a name="IsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked"></a>

```go
func IsUntrustedIssuerBlocked() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId"></a>

```go
func NetworkFirewallPolicyId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

&networkfirewallnetworkfirewallpolicydecryptionprofile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	NetworkFirewallPolicyId: *string,
	Type: *string,
	AreCertificateExtensionsRestricted: interface{},
	Id: *string,
	IsAutoIncludeAltName: interface{},
	IsExpiredCertificateBlocked: interface{},
	IsOutOfCapacityBlocked: interface{},
	IsRevocationStatusTimeoutBlocked: interface{},
	IsUnknownRevocationStatusBlocked: interface{},
	IsUnsupportedCipherBlocked: interface{},
	IsUnsupportedVersionBlocked: interface{},
	IsUntrustedIssuerBlocked: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted">AreCertificateExtensionsRestricted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName">IsAutoIncludeAltName</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked">IsExpiredCertificateBlocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked">IsOutOfCapacityBlocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked">IsRevocationStatusTimeoutBlocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked">IsUnknownRevocationStatusBlocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked">IsUnsupportedCipherBlocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked">IsUnsupportedVersionBlocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked">IsUntrustedIssuerBlocked</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}.

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId"></a>

```go
NetworkFirewallPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}.

---

##### `AreCertificateExtensionsRestricted`<sup>Optional</sup> <a name="AreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted"></a>

```go
AreCertificateExtensionsRestricted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutoIncludeAltName`<sup>Optional</sup> <a name="IsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName"></a>

```go
IsAutoIncludeAltName interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}.

---

##### `IsExpiredCertificateBlocked`<sup>Optional</sup> <a name="IsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked"></a>

```go
IsExpiredCertificateBlocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}.

---

##### `IsOutOfCapacityBlocked`<sup>Optional</sup> <a name="IsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked"></a>

```go
IsOutOfCapacityBlocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}.

---

##### `IsRevocationStatusTimeoutBlocked`<sup>Optional</sup> <a name="IsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked"></a>

```go
IsRevocationStatusTimeoutBlocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}.

---

##### `IsUnknownRevocationStatusBlocked`<sup>Optional</sup> <a name="IsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked"></a>

```go
IsUnknownRevocationStatusBlocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}.

---

##### `IsUnsupportedCipherBlocked`<sup>Optional</sup> <a name="IsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked"></a>

```go
IsUnsupportedCipherBlocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}.

---

##### `IsUnsupportedVersionBlocked`<sup>Optional</sup> <a name="IsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked"></a>

```go
IsUnsupportedVersionBlocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}.

---

##### `IsUntrustedIssuerBlocked`<sup>Optional</sup> <a name="IsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked"></a>

```go
IsUntrustedIssuerBlocked interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts"></a>

```go
Timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfile#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

&networkfirewallnetworkfirewallpolicydecryptionprofile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/networkfirewallnetworkfirewallpolicydecryptionprofile"

networkfirewallnetworkfirewallpolicydecryptionprofile.NewNetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



