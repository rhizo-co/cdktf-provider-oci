# `networkFirewallNetworkFirewallPolicyDecryptionRule` Submodule <a name="`networkFirewallNetworkFirewallPolicyDecryptionRule` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionRule <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule oci_network_firewall_network_firewall_policy_decryption_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRule(Construct Scope, string Id, NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putPosition">PutPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetDecryptionProfile">ResetDecryptionProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPriorityOrder">ResetPriorityOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putCondition"></a>

```csharp
private void PutCondition(NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putCondition.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

---

##### `PutPosition` <a name="PutPosition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putPosition"></a>

```csharp
private void PutPosition(NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putPosition.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a>

---

##### `ResetDecryptionProfile` <a name="ResetDecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetDecryptionProfile"></a>

```csharp
private void ResetDecryptionProfile()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPosition` <a name="ResetPosition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetPriorityOrder` <a name="ResetPriorityOrder" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPriorityOrder"></a>

```csharp
private void ResetPriorityOrder()
```

##### `ResetSecret` <a name="ResetSecret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

NetworkFirewallNetworkFirewallPolicyDecryptionRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.condition">Condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.parentResourceId">ParentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.position">Position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.conditionInput">ConditionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfileInput">DecryptionProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyIdInput">NetworkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.positionInput">PositionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrderInput">PriorityOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfile">DecryptionProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrder">PriorityOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secret">Secret</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.condition"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference Condition { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference</a>

---

##### `ParentResourceId`<sup>Required</sup> <a name="ParentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.parentResourceId"></a>

```csharp
public string ParentResourceId { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.position"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference Position { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeouts"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.conditionInput"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition ConditionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

---

##### `DecryptionProfileInput`<sup>Optional</sup> <a name="DecryptionProfileInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfileInput"></a>

```csharp
public string DecryptionProfileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyIdInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyIdInput"></a>

```csharp
public string NetworkFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.positionInput"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition PositionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

---

##### `PriorityOrderInput`<sup>Optional</sup> <a name="PriorityOrderInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrderInput"></a>

```csharp
public string PriorityOrderInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `DecryptionProfile`<sup>Required</sup> <a name="DecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfile"></a>

```csharp
public string DecryptionProfile { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

##### `PriorityOrder`<sup>Required</sup> <a name="PriorityOrder" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrder"></a>

```csharp
public string PriorityOrder { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition {
    string[] DestinationAddress = null,
    string[] SourceAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.destinationAddress">DestinationAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#destination_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#destination_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.sourceAddress">SourceAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#source_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#source_address}. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.destinationAddress"></a>

```csharp
public string[] DestinationAddress { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#destination_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#destination_address}.

---

##### `SourceAddress`<sup>Optional</sup> <a name="SourceAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.sourceAddress"></a>

```csharp
public string[] SourceAddress { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#source_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#source_address}.

---

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition Condition,
    string Name,
    string NetworkFirewallPolicyId,
    string DecryptionProfile = null,
    string Id = null,
    NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition Position = null,
    string PriorityOrder = null,
    string Secret = null,
    NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#action NetworkFirewallNetworkFirewallPolicyDecryptionRule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.condition">Condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a></code> | condition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#name NetworkFirewallNetworkFirewallPolicyDecryptionRule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionRule#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.decryptionProfile">DecryptionProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#decryption_profile NetworkFirewallNetworkFirewallPolicyDecryptionRule#decryption_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#id NetworkFirewallNetworkFirewallPolicyDecryptionRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.position">Position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a></code> | position block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.priorityOrder">PriorityOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#priority_order NetworkFirewallNetworkFirewallPolicyDecryptionRule#priority_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#secret NetworkFirewallNetworkFirewallPolicyDecryptionRule#secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#action NetworkFirewallNetworkFirewallPolicyDecryptionRule#action}.

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.condition"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition Condition { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#condition NetworkFirewallNetworkFirewallPolicyDecryptionRule#condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#name NetworkFirewallNetworkFirewallPolicyDecryptionRule#name}.

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionRule#network_firewall_policy_id}.

---

##### `DecryptionProfile`<sup>Optional</sup> <a name="DecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.decryptionProfile"></a>

```csharp
public string DecryptionProfile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#decryption_profile NetworkFirewallNetworkFirewallPolicyDecryptionRule#decryption_profile}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#id NetworkFirewallNetworkFirewallPolicyDecryptionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.position"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition Position { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#position NetworkFirewallNetworkFirewallPolicyDecryptionRule#position}

---

##### `PriorityOrder`<sup>Optional</sup> <a name="PriorityOrder" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.priorityOrder"></a>

```csharp
public string PriorityOrder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#priority_order NetworkFirewallNetworkFirewallPolicyDecryptionRule#priority_order}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#secret NetworkFirewallNetworkFirewallPolicyDecryptionRule#secret}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.timeouts"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionRule#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition {
    string AfterRule = null,
    string BeforeRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.afterRule">AfterRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#after_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#after_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.beforeRule">BeforeRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#before_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#before_rule}. |

---

##### `AfterRule`<sup>Optional</sup> <a name="AfterRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.afterRule"></a>

```csharp
public string AfterRule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#after_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#after_rule}.

---

##### `BeforeRule`<sup>Optional</sup> <a name="BeforeRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.beforeRule"></a>

```csharp
public string BeforeRule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#before_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#before_rule}.

---

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#create NetworkFirewallNetworkFirewallPolicyDecryptionRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#delete NetworkFirewallNetworkFirewallPolicyDecryptionRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#update NetworkFirewallNetworkFirewallPolicyDecryptionRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#create NetworkFirewallNetworkFirewallPolicyDecryptionRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#delete NetworkFirewallNetworkFirewallPolicyDecryptionRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#update NetworkFirewallNetworkFirewallPolicyDecryptionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetSourceAddress">ResetSourceAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetSourceAddress` <a name="ResetSourceAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetSourceAddress"></a>

```csharp
private void ResetSourceAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddressInput">SourceAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddress">SourceAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddressInput"></a>

```csharp
public string[] DestinationAddressInput { get; }
```

- *Type:* string[]

---

##### `SourceAddressInput`<sup>Optional</sup> <a name="SourceAddressInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddressInput"></a>

```csharp
public string[] SourceAddressInput { get; }
```

- *Type:* string[]

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddress"></a>

```csharp
public string[] DestinationAddress { get; }
```

- *Type:* string[]

---

##### `SourceAddress`<sup>Required</sup> <a name="SourceAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddress"></a>

```csharp
public string[] SourceAddress { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.internalValue"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

---


### NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetAfterRule">ResetAfterRule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetBeforeRule">ResetBeforeRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAfterRule` <a name="ResetAfterRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetAfterRule"></a>

```csharp
private void ResetAfterRule()
```

##### `ResetBeforeRule` <a name="ResetBeforeRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetBeforeRule"></a>

```csharp
private void ResetBeforeRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRuleInput">AfterRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRuleInput">BeforeRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRule">AfterRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRule">BeforeRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AfterRuleInput`<sup>Optional</sup> <a name="AfterRuleInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRuleInput"></a>

```csharp
public string AfterRuleInput { get; }
```

- *Type:* string

---

##### `BeforeRuleInput`<sup>Optional</sup> <a name="BeforeRuleInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRuleInput"></a>

```csharp
public string BeforeRuleInput { get; }
```

- *Type:* string

---

##### `AfterRule`<sup>Required</sup> <a name="AfterRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRule"></a>

```csharp
public string AfterRule { get; }
```

- *Type:* string

---

##### `BeforeRule`<sup>Required</sup> <a name="BeforeRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRule"></a>

```csharp
public string BeforeRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.internalValue"></a>

```csharp
public NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

---


### NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



