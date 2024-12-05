# `networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule <a name="`networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfile <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionProfile(Construct Scope, string Id, NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig">NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---

##### `ResetAreCertificateExtensionsRestricted` <a name="ResetAreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted"></a>

```csharp
private void ResetAreCertificateExtensionsRestricted()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsAutoIncludeAltName` <a name="ResetIsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName"></a>

```csharp
private void ResetIsAutoIncludeAltName()
```

##### `ResetIsExpiredCertificateBlocked` <a name="ResetIsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked"></a>

```csharp
private void ResetIsExpiredCertificateBlocked()
```

##### `ResetIsOutOfCapacityBlocked` <a name="ResetIsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked"></a>

```csharp
private void ResetIsOutOfCapacityBlocked()
```

##### `ResetIsRevocationStatusTimeoutBlocked` <a name="ResetIsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked"></a>

```csharp
private void ResetIsRevocationStatusTimeoutBlocked()
```

##### `ResetIsUnknownRevocationStatusBlocked` <a name="ResetIsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked"></a>

```csharp
private void ResetIsUnknownRevocationStatusBlocked()
```

##### `ResetIsUnsupportedCipherBlocked` <a name="ResetIsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked"></a>

```csharp
private void ResetIsUnsupportedCipherBlocked()
```

##### `ResetIsUnsupportedVersionBlocked` <a name="ResetIsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked"></a>

```csharp
private void ResetIsUnsupportedVersionBlocked()
```

##### `ResetIsUntrustedIssuerBlocked` <a name="ResetIsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked"></a>

```csharp
private void ResetIsUntrustedIssuerBlocked()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId">ParentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput">AreCertificateExtensionsRestrictedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput">IsAutoIncludeAltNameInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput">IsExpiredCertificateBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput">IsOutOfCapacityBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput">IsRevocationStatusTimeoutBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput">IsUnknownRevocationStatusBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput">IsUnsupportedCipherBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput">IsUnsupportedVersionBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput">IsUntrustedIssuerBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted">AreCertificateExtensionsRestricted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName">IsAutoIncludeAltName</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked">IsExpiredCertificateBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked">IsOutOfCapacityBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked">IsRevocationStatusTimeoutBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked">IsUnknownRevocationStatusBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked">IsUnsupportedCipherBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked">IsUnsupportedVersionBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked">IsUntrustedIssuerBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId"></a>

```csharp
public string ParentResourceId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a>

---

##### `AreCertificateExtensionsRestrictedInput`<sup>Optional</sup> <a name="AreCertificateExtensionsRestrictedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput"></a>

```csharp
public object AreCertificateExtensionsRestrictedInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsAutoIncludeAltNameInput`<sup>Optional</sup> <a name="IsAutoIncludeAltNameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput"></a>

```csharp
public object IsAutoIncludeAltNameInput { get; }
```

- *Type:* object

---

##### `IsExpiredCertificateBlockedInput`<sup>Optional</sup> <a name="IsExpiredCertificateBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput"></a>

```csharp
public object IsExpiredCertificateBlockedInput { get; }
```

- *Type:* object

---

##### `IsOutOfCapacityBlockedInput`<sup>Optional</sup> <a name="IsOutOfCapacityBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput"></a>

```csharp
public object IsOutOfCapacityBlockedInput { get; }
```

- *Type:* object

---

##### `IsRevocationStatusTimeoutBlockedInput`<sup>Optional</sup> <a name="IsRevocationStatusTimeoutBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput"></a>

```csharp
public object IsRevocationStatusTimeoutBlockedInput { get; }
```

- *Type:* object

---

##### `IsUnknownRevocationStatusBlockedInput`<sup>Optional</sup> <a name="IsUnknownRevocationStatusBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput"></a>

```csharp
public object IsUnknownRevocationStatusBlockedInput { get; }
```

- *Type:* object

---

##### `IsUnsupportedCipherBlockedInput`<sup>Optional</sup> <a name="IsUnsupportedCipherBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput"></a>

```csharp
public object IsUnsupportedCipherBlockedInput { get; }
```

- *Type:* object

---

##### `IsUnsupportedVersionBlockedInput`<sup>Optional</sup> <a name="IsUnsupportedVersionBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput"></a>

```csharp
public object IsUnsupportedVersionBlockedInput { get; }
```

- *Type:* object

---

##### `IsUntrustedIssuerBlockedInput`<sup>Optional</sup> <a name="IsUntrustedIssuerBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput"></a>

```csharp
public object IsUntrustedIssuerBlockedInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput"></a>

```csharp
public string NetworkFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AreCertificateExtensionsRestricted`<sup>Required</sup> <a name="AreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted"></a>

```csharp
public object AreCertificateExtensionsRestricted { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAutoIncludeAltName`<sup>Required</sup> <a name="IsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName"></a>

```csharp
public object IsAutoIncludeAltName { get; }
```

- *Type:* object

---

##### `IsExpiredCertificateBlocked`<sup>Required</sup> <a name="IsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked"></a>

```csharp
public object IsExpiredCertificateBlocked { get; }
```

- *Type:* object

---

##### `IsOutOfCapacityBlocked`<sup>Required</sup> <a name="IsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked"></a>

```csharp
public object IsOutOfCapacityBlocked { get; }
```

- *Type:* object

---

##### `IsRevocationStatusTimeoutBlocked`<sup>Required</sup> <a name="IsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked"></a>

```csharp
public object IsRevocationStatusTimeoutBlocked { get; }
```

- *Type:* object

---

##### `IsUnknownRevocationStatusBlocked`<sup>Required</sup> <a name="IsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked"></a>

```csharp
public object IsUnknownRevocationStatusBlocked { get; }
```

- *Type:* object

---

##### `IsUnsupportedCipherBlocked`<sup>Required</sup> <a name="IsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked"></a>

```csharp
public object IsUnsupportedCipherBlocked { get; }
```

- *Type:* object

---

##### `IsUnsupportedVersionBlocked`<sup>Required</sup> <a name="IsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked"></a>

```csharp
public object IsUnsupportedVersionBlocked { get; }
```

- *Type:* object

---

##### `IsUntrustedIssuerBlocked`<sup>Required</sup> <a name="IsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked"></a>

```csharp
public object IsUntrustedIssuerBlocked { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NetworkFirewallPolicyId,
    string Type,
    object AreCertificateExtensionsRestricted = null,
    string Id = null,
    object IsAutoIncludeAltName = null,
    object IsExpiredCertificateBlocked = null,
    object IsOutOfCapacityBlocked = null,
    object IsRevocationStatusTimeoutBlocked = null,
    object IsUnknownRevocationStatusBlocked = null,
    object IsUnsupportedCipherBlocked = null,
    object IsUnsupportedVersionBlocked = null,
    object IsUntrustedIssuerBlocked = null,
    NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted">AreCertificateExtensionsRestricted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName">IsAutoIncludeAltName</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked">IsExpiredCertificateBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked">IsOutOfCapacityBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked">IsRevocationStatusTimeoutBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked">IsUnknownRevocationStatusBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked">IsUnsupportedCipherBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked">IsUnsupportedVersionBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked">IsUntrustedIssuerBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}.

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}.

---

##### `AreCertificateExtensionsRestricted`<sup>Optional</sup> <a name="AreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted"></a>

```csharp
public object AreCertificateExtensionsRestricted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAutoIncludeAltName`<sup>Optional</sup> <a name="IsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName"></a>

```csharp
public object IsAutoIncludeAltName { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}.

---

##### `IsExpiredCertificateBlocked`<sup>Optional</sup> <a name="IsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked"></a>

```csharp
public object IsExpiredCertificateBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}.

---

##### `IsOutOfCapacityBlocked`<sup>Optional</sup> <a name="IsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked"></a>

```csharp
public object IsOutOfCapacityBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}.

---

##### `IsRevocationStatusTimeoutBlocked`<sup>Optional</sup> <a name="IsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked"></a>

```csharp
public object IsRevocationStatusTimeoutBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}.

---

##### `IsUnknownRevocationStatusBlocked`<sup>Optional</sup> <a name="IsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked"></a>

```csharp
public object IsUnknownRevocationStatusBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}.

---

##### `IsUnsupportedCipherBlocked`<sup>Optional</sup> <a name="IsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked"></a>

```csharp
public object IsUnsupportedCipherBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}.

---

##### `IsUnsupportedVersionBlocked`<sup>Optional</sup> <a name="IsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked"></a>

```csharp
public object IsUnsupportedVersionBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}.

---

##### `IsUntrustedIssuerBlocked`<sup>Optional</sup> <a name="IsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked"></a>

```csharp
public object IsUntrustedIssuerBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfile#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



