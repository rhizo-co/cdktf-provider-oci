# `wafWebAppFirewallPolicy` Submodule <a name="`wafWebAppFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafWebAppFirewallPolicy <a name="WafWebAppFirewallPolicy" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicy(Construct Scope, string Id, WafWebAppFirewallPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig">WafWebAppFirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig">WafWebAppFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl">PutRequestAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection">PutRequestProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting">PutRequestRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl">PutResponseAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection">PutResponseProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestAccessControl">ResetRequestAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestProtection">ResetRequestProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestRateLimiting">ResetRequestRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseAccessControl">ResetResponseAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseProtection">ResetResponseProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetSystemTags">ResetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions"></a>

```csharp
private void PutActions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putActions.parameter.value"></a>

- *Type:* object

---

##### `PutRequestAccessControl` <a name="PutRequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl"></a>

```csharp
private void PutRequestAccessControl(WafWebAppFirewallPolicyRequestAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestAccessControl.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---

##### `PutRequestProtection` <a name="PutRequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection"></a>

```csharp
private void PutRequestProtection(WafWebAppFirewallPolicyRequestProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestProtection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---

##### `PutRequestRateLimiting` <a name="PutRequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting"></a>

```csharp
private void PutRequestRateLimiting(WafWebAppFirewallPolicyRequestRateLimiting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putRequestRateLimiting.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---

##### `PutResponseAccessControl` <a name="PutResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl"></a>

```csharp
private void PutResponseAccessControl(WafWebAppFirewallPolicyResponseAccessControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseAccessControl.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---

##### `PutResponseProtection` <a name="PutResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection"></a>

```csharp
private void PutResponseProtection(WafWebAppFirewallPolicyResponseProtection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putResponseProtection.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(WafWebAppFirewallPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>

---

##### `ResetActions` <a name="ResetActions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequestAccessControl` <a name="ResetRequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestAccessControl"></a>

```csharp
private void ResetRequestAccessControl()
```

##### `ResetRequestProtection` <a name="ResetRequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestProtection"></a>

```csharp
private void ResetRequestProtection()
```

##### `ResetRequestRateLimiting` <a name="ResetRequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetRequestRateLimiting"></a>

```csharp
private void ResetRequestRateLimiting()
```

##### `ResetResponseAccessControl` <a name="ResetResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseAccessControl"></a>

```csharp
private void ResetResponseAccessControl()
```

##### `ResetResponseProtection` <a name="ResetResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetResponseProtection"></a>

```csharp
private void ResetResponseProtection()
```

##### `ResetSystemTags` <a name="ResetSystemTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetSystemTags"></a>

```csharp
private void ResetSystemTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WafWebAppFirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WafWebAppFirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WafWebAppFirewallPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

WafWebAppFirewallPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafWebAppFirewallPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafWebAppFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WafWebAppFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList">WafWebAppFirewallPolicyActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControl">RequestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference">WafWebAppFirewallPolicyRequestAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtection">RequestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference">WafWebAppFirewallPolicyRequestProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimiting">RequestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference">WafWebAppFirewallPolicyRequestRateLimitingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControl">ResponseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference">WafWebAppFirewallPolicyResponseAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtection">ResponseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference">WafWebAppFirewallPolicyResponseProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference">WafWebAppFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actionsInput">ActionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControlInput">RequestAccessControlInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtectionInput">RequestProtectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimitingInput">RequestRateLimitingInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControlInput">ResponseAccessControlInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtectionInput">ResponseProtectionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTagsInput">SystemTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actions"></a>

```csharp
public WafWebAppFirewallPolicyActionsList Actions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList">WafWebAppFirewallPolicyActionsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `RequestAccessControl`<sup>Required</sup> <a name="RequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControl"></a>

```csharp
public WafWebAppFirewallPolicyRequestAccessControlOutputReference RequestAccessControl { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference">WafWebAppFirewallPolicyRequestAccessControlOutputReference</a>

---

##### `RequestProtection`<sup>Required</sup> <a name="RequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtection"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionOutputReference RequestProtection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference">WafWebAppFirewallPolicyRequestProtectionOutputReference</a>

---

##### `RequestRateLimiting`<sup>Required</sup> <a name="RequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimiting"></a>

```csharp
public WafWebAppFirewallPolicyRequestRateLimitingOutputReference RequestRateLimiting { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference">WafWebAppFirewallPolicyRequestRateLimitingOutputReference</a>

---

##### `ResponseAccessControl`<sup>Required</sup> <a name="ResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControl"></a>

```csharp
public WafWebAppFirewallPolicyResponseAccessControlOutputReference ResponseAccessControl { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference">WafWebAppFirewallPolicyResponseAccessControlOutputReference</a>

---

##### `ResponseProtection`<sup>Required</sup> <a name="ResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtection"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionOutputReference ResponseProtection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference">WafWebAppFirewallPolicyResponseProtectionOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeouts"></a>

```csharp
public WafWebAppFirewallPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference">WafWebAppFirewallPolicyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.actionsInput"></a>

```csharp
public object ActionsInput { get; }
```

- *Type:* object

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RequestAccessControlInput`<sup>Optional</sup> <a name="RequestAccessControlInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestAccessControlInput"></a>

```csharp
public WafWebAppFirewallPolicyRequestAccessControl RequestAccessControlInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---

##### `RequestProtectionInput`<sup>Optional</sup> <a name="RequestProtectionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestProtectionInput"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtection RequestProtectionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---

##### `RequestRateLimitingInput`<sup>Optional</sup> <a name="RequestRateLimitingInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.requestRateLimitingInput"></a>

```csharp
public WafWebAppFirewallPolicyRequestRateLimiting RequestRateLimitingInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---

##### `ResponseAccessControlInput`<sup>Optional</sup> <a name="ResponseAccessControlInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseAccessControlInput"></a>

```csharp
public WafWebAppFirewallPolicyResponseAccessControl ResponseAccessControlInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---

##### `ResponseProtectionInput`<sup>Optional</sup> <a name="ResponseProtectionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.responseProtectionInput"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtection ResponseProtectionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---

##### `SystemTagsInput`<sup>Optional</sup> <a name="SystemTagsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafWebAppFirewallPolicyActions <a name="WafWebAppFirewallPolicyActions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActions {
    string Name,
    string Type,
    WafWebAppFirewallPolicyActionsBody Body = null,
    double Code = null,
    object Headers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.body">Body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | body block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.code">Code</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#code WafWebAppFirewallPolicy#code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.headers">Headers</a></code> | <code>object</code> | headers block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.body"></a>

```csharp
public WafWebAppFirewallPolicyActionsBody Body { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

body block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body WafWebAppFirewallPolicy#body}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.code"></a>

```csharp
public double Code { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#code WafWebAppFirewallPolicy#code}.

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActions.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#headers WafWebAppFirewallPolicy#headers}

---

### WafWebAppFirewallPolicyActionsBody <a name="WafWebAppFirewallPolicyActionsBody" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActionsBody {
    string Type,
    string Template = null,
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.template">Template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Template`<sup>Optional</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#template WafWebAppFirewallPolicy#template}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#text WafWebAppFirewallPolicy#text}.

---

### WafWebAppFirewallPolicyActionsHeaders <a name="WafWebAppFirewallPolicyActionsHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActionsHeaders {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#value WafWebAppFirewallPolicy#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#value WafWebAppFirewallPolicy#value}.

---

### WafWebAppFirewallPolicyConfig <a name="WafWebAppFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Actions = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    WafWebAppFirewallPolicyRequestAccessControl RequestAccessControl = null,
    WafWebAppFirewallPolicyRequestProtection RequestProtection = null,
    WafWebAppFirewallPolicyRequestRateLimiting RequestRateLimiting = null,
    WafWebAppFirewallPolicyResponseAccessControl ResponseAccessControl = null,
    WafWebAppFirewallPolicyResponseProtection ResponseProtection = null,
    System.Collections.Generic.IDictionary<string, string> SystemTags = null,
    WafWebAppFirewallPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.actions">Actions</a></code> | <code>object</code> | actions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestAccessControl">RequestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | request_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestProtection">RequestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | request_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestRateLimiting">RequestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | request_rate_limiting block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseAccessControl">ResponseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | response_access_control block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseProtection">ResponseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | response_protection block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.systemTags">SystemTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#compartment_id WafWebAppFirewallPolicy#compartment_id}.

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.actions"></a>

```csharp
public object Actions { get; set; }
```

- *Type:* object

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#actions WafWebAppFirewallPolicy#actions}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#defined_tags WafWebAppFirewallPolicy#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#display_name WafWebAppFirewallPolicy#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#freeform_tags WafWebAppFirewallPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#id WafWebAppFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestAccessControl`<sup>Optional</sup> <a name="RequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestAccessControl"></a>

```csharp
public WafWebAppFirewallPolicyRequestAccessControl RequestAccessControl { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

request_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_access_control WafWebAppFirewallPolicy#request_access_control}

---

##### `RequestProtection`<sup>Optional</sup> <a name="RequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestProtection"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtection RequestProtection { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

request_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_protection WafWebAppFirewallPolicy#request_protection}

---

##### `RequestRateLimiting`<sup>Optional</sup> <a name="RequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.requestRateLimiting"></a>

```csharp
public WafWebAppFirewallPolicyRequestRateLimiting RequestRateLimiting { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

request_rate_limiting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_rate_limiting WafWebAppFirewallPolicy#request_rate_limiting}

---

##### `ResponseAccessControl`<sup>Optional</sup> <a name="ResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseAccessControl"></a>

```csharp
public WafWebAppFirewallPolicyResponseAccessControl ResponseAccessControl { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

response_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_access_control WafWebAppFirewallPolicy#response_access_control}

---

##### `ResponseProtection`<sup>Optional</sup> <a name="ResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.responseProtection"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtection ResponseProtection { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

response_protection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#response_protection WafWebAppFirewallPolicy#response_protection}

---

##### `SystemTags`<sup>Optional</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.systemTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SystemTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#system_tags WafWebAppFirewallPolicy#system_tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyConfig.property.timeouts"></a>

```csharp
public WafWebAppFirewallPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts">WafWebAppFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#timeouts WafWebAppFirewallPolicy#timeouts}

---

### WafWebAppFirewallPolicyRequestAccessControl <a name="WafWebAppFirewallPolicyRequestAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestAccessControl {
    string DefaultActionName,
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.defaultActionName">DefaultActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `DefaultActionName`<sup>Required</sup> <a name="DefaultActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.defaultActionName"></a>

```csharp
public string DefaultActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#default_action_name WafWebAppFirewallPolicy#default_action_name}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestAccessControlRules <a name="WafWebAppFirewallPolicyRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestAccessControlRules {
    string ActionName,
    string Name,
    string Type,
    string Condition = null,
    string ConditionLanguage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRules.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyRequestProtection <a name="WafWebAppFirewallPolicyRequestProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtection {
    string BodyInspectionSizeLimitExceededActionName = null,
    double BodyInspectionSizeLimitInBytes = null,
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitExceededActionName">BodyInspectionSizeLimitExceededActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitInBytes">BodyInspectionSizeLimitInBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `BodyInspectionSizeLimitExceededActionName`<sup>Optional</sup> <a name="BodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitExceededActionName"></a>

```csharp
public string BodyInspectionSizeLimitExceededActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_exceeded_action_name WafWebAppFirewallPolicy#body_inspection_size_limit_exceeded_action_name}.

---

##### `BodyInspectionSizeLimitInBytes`<sup>Optional</sup> <a name="BodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.bodyInspectionSizeLimitInBytes"></a>

```csharp
public double BodyInspectionSizeLimitInBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#body_inspection_size_limit_in_bytes WafWebAppFirewallPolicy#body_inspection_size_limit_in_bytes}.

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestProtectionRules <a name="WafWebAppFirewallPolicyRequestProtectionRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRules {
    string ActionName,
    string Name,
    object ProtectionCapabilities,
    string Type,
    string Condition = null,
    string ConditionLanguage = null,
    object IsBodyInspectionEnabled = null,
    WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings ProtectionCapabilitySettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code>object</code> | protection_capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | protection_capability_settings block. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilities"></a>

```csharp
public object ProtectionCapabilities { get; set; }
```

- *Type:* object

protection_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

##### `IsBodyInspectionEnabled`<sup>Optional</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.isBodyInspectionEnabled"></a>

```csharp
public object IsBodyInspectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}.

---

##### `ProtectionCapabilitySettings`<sup>Optional</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRules.property.protectionCapabilitySettings"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings ProtectionCapabilitySettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

protection_capability_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities {
    string Key,
    double Version,
    string ActionName = null,
    double CollaborativeActionThreshold = null,
    object CollaborativeWeights = null,
    WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions Exclusions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeWeights">CollaborativeWeights</a></code> | <code>object</code> | collaborative_weights block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | exclusions block. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `CollaborativeActionThreshold`<sup>Optional</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold"></a>

```csharp
public double CollaborativeActionThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}.

---

##### `CollaborativeWeights`<sup>Optional</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.collaborativeWeights"></a>

```csharp
public object CollaborativeWeights { get; set; }
```

- *Type:* object

collaborative_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities.property.exclusions"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions Exclusions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights {
    string Key,
    double Weight
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}.

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions {
    string[] Args = null,
    string[] RequestCookies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.args">Args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies">RequestCookies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

##### `RequestCookies`<sup>Optional</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies"></a>

```csharp
public string[] RequestCookies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings {
    string[] AllowedHttpMethods = null,
    double MaxHttpRequestHeaderLength = null,
    double MaxHttpRequestHeaders = null,
    double MaxNumberOfArguments = null,
    double MaxSingleArgumentLength = null,
    double MaxTotalArgumentLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}. |

---

##### `AllowedHttpMethods`<sup>Optional</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

##### `MaxHttpRequestHeaderLength`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength"></a>

```csharp
public double MaxHttpRequestHeaderLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

##### `MaxHttpRequestHeaders`<sup>Optional</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders"></a>

```csharp
public double MaxHttpRequestHeaders { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

##### `MaxNumberOfArguments`<sup>Optional</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments"></a>

```csharp
public double MaxNumberOfArguments { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

##### `MaxSingleArgumentLength`<sup>Optional</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength"></a>

```csharp
public double MaxSingleArgumentLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

##### `MaxTotalArgumentLength`<sup>Optional</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength"></a>

```csharp
public double MaxTotalArgumentLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

### WafWebAppFirewallPolicyRequestRateLimiting <a name="WafWebAppFirewallPolicyRequestRateLimiting" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimiting {
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyRequestRateLimitingRules <a name="WafWebAppFirewallPolicyRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimitingRules {
    string ActionName,
    object Configurations,
    string Name,
    string Type,
    string Condition = null,
    string ConditionLanguage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.configurations">Configurations</a></code> | <code>object</code> | configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.configurations"></a>

```csharp
public object Configurations { get; set; }
```

- *Type:* object

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#configurations WafWebAppFirewallPolicy#configurations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRules.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations {
    double PeriodInSeconds,
    double RequestsLimit,
    double ActionDurationInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.periodInSeconds">PeriodInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#period_in_seconds WafWebAppFirewallPolicy#period_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.requestsLimit">RequestsLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#requests_limit WafWebAppFirewallPolicy#requests_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.actionDurationInSeconds">ActionDurationInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_duration_in_seconds WafWebAppFirewallPolicy#action_duration_in_seconds}. |

---

##### `PeriodInSeconds`<sup>Required</sup> <a name="PeriodInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.periodInSeconds"></a>

```csharp
public double PeriodInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#period_in_seconds WafWebAppFirewallPolicy#period_in_seconds}.

---

##### `RequestsLimit`<sup>Required</sup> <a name="RequestsLimit" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.requestsLimit"></a>

```csharp
public double RequestsLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#requests_limit WafWebAppFirewallPolicy#requests_limit}.

---

##### `ActionDurationInSeconds`<sup>Optional</sup> <a name="ActionDurationInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations.property.actionDurationInSeconds"></a>

```csharp
public double ActionDurationInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_duration_in_seconds WafWebAppFirewallPolicy#action_duration_in_seconds}.

---

### WafWebAppFirewallPolicyResponseAccessControl <a name="WafWebAppFirewallPolicyResponseAccessControl" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseAccessControl {
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyResponseAccessControlRules <a name="WafWebAppFirewallPolicyResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseAccessControlRules {
    string ActionName,
    string Name,
    string Type,
    string Condition = null,
    string ConditionLanguage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRules.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

### WafWebAppFirewallPolicyResponseProtection <a name="WafWebAppFirewallPolicyResponseProtection" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtection {
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.property.rules">Rules</a></code> | <code>object</code> | rules block. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#rules WafWebAppFirewallPolicy#rules}

---

### WafWebAppFirewallPolicyResponseProtectionRules <a name="WafWebAppFirewallPolicyResponseProtectionRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRules {
    string ActionName,
    string Name,
    object ProtectionCapabilities,
    string Type,
    string Condition = null,
    string ConditionLanguage = null,
    object IsBodyInspectionEnabled = null,
    WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings ProtectionCapabilitySettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code>object</code> | protection_capabilities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | protection_capability_settings block. |

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#name WafWebAppFirewallPolicy#name}.

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilities"></a>

```csharp
public object ProtectionCapabilities { get; set; }
```

- *Type:* object

protection_capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capabilities WafWebAppFirewallPolicy#protection_capabilities}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#type WafWebAppFirewallPolicy#type}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition WafWebAppFirewallPolicy#condition}.

---

##### `ConditionLanguage`<sup>Optional</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#condition_language WafWebAppFirewallPolicy#condition_language}.

---

##### `IsBodyInspectionEnabled`<sup>Optional</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.isBodyInspectionEnabled"></a>

```csharp
public object IsBodyInspectionEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#is_body_inspection_enabled WafWebAppFirewallPolicy#is_body_inspection_enabled}.

---

##### `ProtectionCapabilitySettings`<sup>Optional</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRules.property.protectionCapabilitySettings"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings ProtectionCapabilitySettings { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

protection_capability_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#protection_capability_settings WafWebAppFirewallPolicy#protection_capability_settings}

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities {
    string Key,
    double Version,
    string ActionName = null,
    double CollaborativeActionThreshold = null,
    object CollaborativeWeights = null,
    WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions Exclusions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.actionName">ActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeWeights">CollaborativeWeights</a></code> | <code>object</code> | collaborative_weights block. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | exclusions block. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#version WafWebAppFirewallPolicy#version}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.actionName"></a>

```csharp
public string ActionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#action_name WafWebAppFirewallPolicy#action_name}.

---

##### `CollaborativeActionThreshold`<sup>Optional</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeActionThreshold"></a>

```csharp
public double CollaborativeActionThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_action_threshold WafWebAppFirewallPolicy#collaborative_action_threshold}.

---

##### `CollaborativeWeights`<sup>Optional</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.collaborativeWeights"></a>

```csharp
public object CollaborativeWeights { get; set; }
```

- *Type:* object

collaborative_weights block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#collaborative_weights WafWebAppFirewallPolicy#collaborative_weights}

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities.property.exclusions"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions Exclusions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

exclusions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#exclusions WafWebAppFirewallPolicy#exclusions}

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights {
    string Key,
    double Weight
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#key WafWebAppFirewallPolicy#key}.

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#weight WafWebAppFirewallPolicy#weight}.

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions {
    string[] Args = null,
    string[] RequestCookies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.args">Args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies">RequestCookies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}. |

---

##### `Args`<sup>Optional</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#args WafWebAppFirewallPolicy#args}.

---

##### `RequestCookies`<sup>Optional</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions.property.requestCookies"></a>

```csharp
public string[] RequestCookies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#request_cookies WafWebAppFirewallPolicy#request_cookies}.

---

### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings {
    string[] AllowedHttpMethods = null,
    double MaxHttpRequestHeaderLength = null,
    double MaxHttpRequestHeaders = null,
    double MaxNumberOfArguments = null,
    double MaxSingleArgumentLength = null,
    double MaxTotalArgumentLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}. |

---

##### `AllowedHttpMethods`<sup>Optional</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#allowed_http_methods WafWebAppFirewallPolicy#allowed_http_methods}.

---

##### `MaxHttpRequestHeaderLength`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaderLength"></a>

```csharp
public double MaxHttpRequestHeaderLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_header_length WafWebAppFirewallPolicy#max_http_request_header_length}.

---

##### `MaxHttpRequestHeaders`<sup>Optional</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxHttpRequestHeaders"></a>

```csharp
public double MaxHttpRequestHeaders { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_http_request_headers WafWebAppFirewallPolicy#max_http_request_headers}.

---

##### `MaxNumberOfArguments`<sup>Optional</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxNumberOfArguments"></a>

```csharp
public double MaxNumberOfArguments { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_number_of_arguments WafWebAppFirewallPolicy#max_number_of_arguments}.

---

##### `MaxSingleArgumentLength`<sup>Optional</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxSingleArgumentLength"></a>

```csharp
public double MaxSingleArgumentLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_single_argument_length WafWebAppFirewallPolicy#max_single_argument_length}.

---

##### `MaxTotalArgumentLength`<sup>Optional</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings.property.maxTotalArgumentLength"></a>

```csharp
public double MaxTotalArgumentLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#max_total_argument_length WafWebAppFirewallPolicy#max_total_argument_length}.

---

### WafWebAppFirewallPolicyTimeouts <a name="WafWebAppFirewallPolicyTimeouts" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#create WafWebAppFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#delete WafWebAppFirewallPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/waf_web_app_firewall_policy#update WafWebAppFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafWebAppFirewallPolicyActionsBodyOutputReference <a name="WafWebAppFirewallPolicyActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActionsBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplate` <a name="ResetTemplate" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetTemplate"></a>

```csharp
private void ResetTemplate()
```

##### `ResetText` <a name="ResetText" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyActionsBody InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---


### WafWebAppFirewallPolicyActionsHeadersList <a name="WafWebAppFirewallPolicyActionsHeadersList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActionsHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get"></a>

```csharp
private WafWebAppFirewallPolicyActionsHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyActionsHeadersOutputReference <a name="WafWebAppFirewallPolicyActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActionsHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyActionsList <a name="WafWebAppFirewallPolicyActionsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get"></a>

```csharp
private WafWebAppFirewallPolicyActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyActionsOutputReference <a name="WafWebAppFirewallPolicyActionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody"></a>

```csharp
private void PutBody(WafWebAppFirewallPolicyActionsBody Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---

##### `PutHeaders` <a name="PutHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetBody` <a name="ResetBody" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetHeaders` <a name="ResetHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.body">Body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference">WafWebAppFirewallPolicyActionsBodyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headers">Headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList">WafWebAppFirewallPolicyActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.bodyInput">BodyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.codeInput">CodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.body"></a>

```csharp
public WafWebAppFirewallPolicyActionsBodyOutputReference Body { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBodyOutputReference">WafWebAppFirewallPolicyActionsBodyOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headers"></a>

```csharp
public WafWebAppFirewallPolicyActionsHeadersList Headers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsHeadersList">WafWebAppFirewallPolicyActionsHeadersList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.bodyInput"></a>

```csharp
public WafWebAppFirewallPolicyActionsBody BodyInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsBody">WafWebAppFirewallPolicyActionsBody</a>

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.codeInput"></a>

```csharp
public double CodeInput { get; }
```

- *Type:* double

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyActionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestAccessControlOutputReference <a name="WafWebAppFirewallPolicyRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList">WafWebAppFirewallPolicyRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionNameInput">DefaultActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName">DefaultActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rules"></a>

```csharp
public WafWebAppFirewallPolicyRequestAccessControlRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList">WafWebAppFirewallPolicyRequestAccessControlRulesList</a>

---

##### `DefaultActionNameInput`<sup>Optional</sup> <a name="DefaultActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionNameInput"></a>

```csharp
public string DefaultActionNameInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `DefaultActionName`<sup>Required</sup> <a name="DefaultActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.defaultActionName"></a>

```csharp
public string DefaultActionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyRequestAccessControl InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControl">WafWebAppFirewallPolicyRequestAccessControl</a>

---


### WafWebAppFirewallPolicyRequestAccessControlRulesList <a name="WafWebAppFirewallPolicyRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestAccessControlRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get"></a>

```csharp
private WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference <a name="WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.resetConditionLanguage"></a>

```csharp
private void ResetConditionLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguageInput"></a>

```csharp
public string ConditionLanguageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestAccessControlRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestProtectionOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitExceededActionName">ResetBodyInspectionSizeLimitExceededActionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitInBytes">ResetBodyInspectionSizeLimitInBytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetBodyInspectionSizeLimitExceededActionName` <a name="ResetBodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitExceededActionName"></a>

```csharp
private void ResetBodyInspectionSizeLimitExceededActionName()
```

##### `ResetBodyInspectionSizeLimitInBytes` <a name="ResetBodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetBodyInspectionSizeLimitInBytes"></a>

```csharp
private void ResetBodyInspectionSizeLimitInBytes()
```

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList">WafWebAppFirewallPolicyRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionNameInput">BodyInspectionSizeLimitExceededActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytesInput">BodyInspectionSizeLimitInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">BodyInspectionSizeLimitExceededActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">BodyInspectionSizeLimitInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rules"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList">WafWebAppFirewallPolicyRequestProtectionRulesList</a>

---

##### `BodyInspectionSizeLimitExceededActionNameInput`<sup>Optional</sup> <a name="BodyInspectionSizeLimitExceededActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionNameInput"></a>

```csharp
public string BodyInspectionSizeLimitExceededActionNameInput { get; }
```

- *Type:* string

---

##### `BodyInspectionSizeLimitInBytesInput`<sup>Optional</sup> <a name="BodyInspectionSizeLimitInBytesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytesInput"></a>

```csharp
public double BodyInspectionSizeLimitInBytesInput { get; }
```

- *Type:* double

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `BodyInspectionSizeLimitExceededActionName`<sup>Required</sup> <a name="BodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```csharp
public string BodyInspectionSizeLimitExceededActionName { get; }
```

- *Type:* string

---

##### `BodyInspectionSizeLimitInBytes`<sup>Required</sup> <a name="BodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```csharp
public double BodyInspectionSizeLimitInBytes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtection">WafWebAppFirewallPolicyRequestProtection</a>

---


### WafWebAppFirewallPolicyRequestProtectionRulesList <a name="WafWebAppFirewallPolicyRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get"></a>

```csharp
private WafWebAppFirewallPolicyRequestProtectionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestProtectionRulesOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities">PutProtectionCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings">PutProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetIsBodyInspectionEnabled">ResetIsBodyInspectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetProtectionCapabilitySettings">ResetProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectionCapabilities` <a name="PutProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities"></a>

```csharp
private void PutProtectionCapabilities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilities.parameter.value"></a>

- *Type:* object

---

##### `PutProtectionCapabilitySettings` <a name="PutProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings"></a>

```csharp
private void PutProtectionCapabilitySettings(WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetConditionLanguage"></a>

```csharp
private void ResetConditionLanguage()
```

##### `ResetIsBodyInspectionEnabled` <a name="ResetIsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetIsBodyInspectionEnabled"></a>

```csharp
private void ResetIsBodyInspectionEnabled()
```

##### `ResetProtectionCapabilitySettings` <a name="ResetProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.resetProtectionCapabilitySettings"></a>

```csharp
private void ResetProtectionCapabilitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabledInput">IsBodyInspectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitiesInput">ProtectionCapabilitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettingsInput">ProtectionCapabilitySettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList ProtectionCapabilities { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `ProtectionCapabilitySettings`<sup>Required</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference ProtectionCapabilitySettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguageInput"></a>

```csharp
public string ConditionLanguageInput { get; }
```

- *Type:* string

---

##### `IsBodyInspectionEnabledInput`<sup>Optional</sup> <a name="IsBodyInspectionEnabledInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabledInput"></a>

```csharp
public object IsBodyInspectionEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectionCapabilitiesInput`<sup>Optional</sup> <a name="ProtectionCapabilitiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitiesInput"></a>

```csharp
public object ProtectionCapabilitiesInput { get; }
```

- *Type:* object

---

##### `ProtectionCapabilitySettingsInput`<sup>Optional</sup> <a name="ProtectionCapabilitySettingsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.protectionCapabilitySettingsInput"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings ProtectionCapabilitySettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `IsBodyInspectionEnabled`<sup>Required</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```csharp
public object IsBodyInspectionEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```csharp
private WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies">ResetRequestCookies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetRequestCookies` <a name="ResetRequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies"></a>

```csharp
private void ResetRequestCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput">RequestCookiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `RequestCookiesInput`<sup>Optional</sup> <a name="RequestCookiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput"></a>

```csharp
public string[] RequestCookiesInput { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```csharp
public string[] RequestCookies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```csharp
private WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights">PutCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetActionName">ResetActionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold">ResetCollaborativeActionThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights">ResetCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollaborativeWeights` <a name="PutCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights"></a>

```csharp
private void PutCollaborativeWeights(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights.parameter.value"></a>

- *Type:* object

---

##### `PutExclusions` <a name="PutExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions"></a>

```csharp
private void PutExclusions(WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `ResetActionName` <a name="ResetActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetActionName"></a>

```csharp
private void ResetActionName()
```

##### `ResetCollaborativeActionThreshold` <a name="ResetCollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold"></a>

```csharp
private void ResetCollaborativeActionThreshold()
```

##### `ResetCollaborativeWeights` <a name="ResetCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights"></a>

```csharp
private void ResetCollaborativeWeights()
```

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">CollaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput">CollaborativeActionThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput">CollaborativeWeightsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollaborativeWeights`<sup>Required</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList CollaborativeWeights { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference Exclusions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `CollaborativeActionThresholdInput`<sup>Optional</sup> <a name="CollaborativeActionThresholdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput"></a>

```csharp
public double CollaborativeActionThresholdInput { get; }
```

- *Type:* double

---

##### `CollaborativeWeightsInput`<sup>Optional</sup> <a name="CollaborativeWeightsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput"></a>

```csharp
public object CollaborativeWeightsInput { get; }
```

- *Type:* object

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions ExclusionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `CollaborativeActionThreshold`<sup>Required</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```csharp
public double CollaborativeActionThreshold { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods">ResetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength">ResetMaxHttpRequestHeaderLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders">ResetMaxHttpRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments">ResetMaxNumberOfArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength">ResetMaxSingleArgumentLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength">ResetMaxTotalArgumentLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHttpMethods` <a name="ResetAllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods"></a>

```csharp
private void ResetAllowedHttpMethods()
```

##### `ResetMaxHttpRequestHeaderLength` <a name="ResetMaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength"></a>

```csharp
private void ResetMaxHttpRequestHeaderLength()
```

##### `ResetMaxHttpRequestHeaders` <a name="ResetMaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders"></a>

```csharp
private void ResetMaxHttpRequestHeaders()
```

##### `ResetMaxNumberOfArguments` <a name="ResetMaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments"></a>

```csharp
private void ResetMaxNumberOfArguments()
```

##### `ResetMaxSingleArgumentLength` <a name="ResetMaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength"></a>

```csharp
private void ResetMaxSingleArgumentLength()
```

##### `ResetMaxTotalArgumentLength` <a name="ResetMaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength"></a>

```csharp
private void ResetMaxTotalArgumentLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput">AllowedHttpMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput">MaxHttpRequestHeaderLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput">MaxHttpRequestHeadersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput">MaxNumberOfArgumentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput">MaxSingleArgumentLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput">MaxTotalArgumentLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHttpMethodsInput`<sup>Optional</sup> <a name="AllowedHttpMethodsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput"></a>

```csharp
public string[] AllowedHttpMethodsInput { get; }
```

- *Type:* string[]

---

##### `MaxHttpRequestHeaderLengthInput`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput"></a>

```csharp
public double MaxHttpRequestHeaderLengthInput { get; }
```

- *Type:* double

---

##### `MaxHttpRequestHeadersInput`<sup>Optional</sup> <a name="MaxHttpRequestHeadersInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput"></a>

```csharp
public double MaxHttpRequestHeadersInput { get; }
```

- *Type:* double

---

##### `MaxNumberOfArgumentsInput`<sup>Optional</sup> <a name="MaxNumberOfArgumentsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput"></a>

```csharp
public double MaxNumberOfArgumentsInput { get; }
```

- *Type:* double

---

##### `MaxSingleArgumentLengthInput`<sup>Optional</sup> <a name="MaxSingleArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput"></a>

```csharp
public double MaxSingleArgumentLengthInput { get; }
```

- *Type:* double

---

##### `MaxTotalArgumentLengthInput`<sup>Optional</sup> <a name="MaxTotalArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput"></a>

```csharp
public double MaxTotalArgumentLengthInput { get; }
```

- *Type:* double

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; }
```

- *Type:* string[]

---

##### `MaxHttpRequestHeaderLength`<sup>Required</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```csharp
public double MaxHttpRequestHeaderLength { get; }
```

- *Type:* double

---

##### `MaxHttpRequestHeaders`<sup>Required</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```csharp
public double MaxHttpRequestHeaders { get; }
```

- *Type:* double

---

##### `MaxNumberOfArguments`<sup>Required</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```csharp
public double MaxNumberOfArguments { get; }
```

- *Type:* double

---

##### `MaxSingleArgumentLength`<sup>Required</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```csharp
public double MaxSingleArgumentLength { get; }
```

- *Type:* double

---

##### `MaxTotalArgumentLength`<sup>Required</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```csharp
public double MaxTotalArgumentLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings</a>

---


### WafWebAppFirewallPolicyRequestRateLimitingOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimitingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList">WafWebAppFirewallPolicyRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rules"></a>

```csharp
public WafWebAppFirewallPolicyRequestRateLimitingRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList">WafWebAppFirewallPolicyRequestRateLimitingRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyRequestRateLimiting InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimiting">WafWebAppFirewallPolicyRequestRateLimiting</a>

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get"></a>

```csharp
private WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resetActionDurationInSeconds">ResetActionDurationInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionDurationInSeconds` <a name="ResetActionDurationInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.resetActionDurationInSeconds"></a>

```csharp
private void ResetActionDurationInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSecondsInput">ActionDurationInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSecondsInput">PeriodInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimitInput">RequestsLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">ActionDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">PeriodInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">RequestsLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionDurationInSecondsInput`<sup>Optional</sup> <a name="ActionDurationInSecondsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSecondsInput"></a>

```csharp
public double ActionDurationInSecondsInput { get; }
```

- *Type:* double

---

##### `PeriodInSecondsInput`<sup>Optional</sup> <a name="PeriodInSecondsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSecondsInput"></a>

```csharp
public double PeriodInSecondsInput { get; }
```

- *Type:* double

---

##### `RequestsLimitInput`<sup>Optional</sup> <a name="RequestsLimitInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimitInput"></a>

```csharp
public double RequestsLimitInput { get; }
```

- *Type:* double

---

##### `ActionDurationInSeconds`<sup>Required</sup> <a name="ActionDurationInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```csharp
public double ActionDurationInSeconds { get; }
```

- *Type:* double

---

##### `PeriodInSeconds`<sup>Required</sup> <a name="PeriodInSeconds" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```csharp
public double PeriodInSeconds { get; }
```

- *Type:* double

---

##### `RequestsLimit`<sup>Required</sup> <a name="RequestsLimit" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```csharp
public double RequestsLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesList <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimitingRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get"></a>

```csharp
private WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference <a name="WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations"></a>

```csharp
private void PutConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.putConfigurations.parameter.value"></a>

- *Type:* object

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.resetConditionLanguage"></a>

```csharp
private void ResetConditionLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurations"></a>

```csharp
public WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList Configurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList">WafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguageInput"></a>

```csharp
public string ConditionLanguageInput { get; }
```

- *Type:* string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.configurationsInput"></a>

```csharp
public object ConfigurationsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseAccessControlOutputReference <a name="WafWebAppFirewallPolicyResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseAccessControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList">WafWebAppFirewallPolicyResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rules"></a>

```csharp
public WafWebAppFirewallPolicyResponseAccessControlRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList">WafWebAppFirewallPolicyResponseAccessControlRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyResponseAccessControl InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControl">WafWebAppFirewallPolicyResponseAccessControl</a>

---


### WafWebAppFirewallPolicyResponseAccessControlRulesList <a name="WafWebAppFirewallPolicyResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseAccessControlRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get"></a>

```csharp
private WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference <a name="WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.resetConditionLanguage"></a>

```csharp
private void ResetConditionLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguageInput"></a>

```csharp
public string ConditionLanguageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseAccessControlRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseProtectionOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetRules` <a name="ResetRules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.resetRules"></a>

```csharp
private void ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList">WafWebAppFirewallPolicyResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rules"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList">WafWebAppFirewallPolicyResponseProtectionRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtection">WafWebAppFirewallPolicyResponseProtection</a>

---


### WafWebAppFirewallPolicyResponseProtectionRulesList <a name="WafWebAppFirewallPolicyResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get"></a>

```csharp
private WafWebAppFirewallPolicyResponseProtectionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseProtectionRulesOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities">PutProtectionCapabilities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings">PutProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetConditionLanguage">ResetConditionLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetIsBodyInspectionEnabled">ResetIsBodyInspectionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetProtectionCapabilitySettings">ResetProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtectionCapabilities` <a name="PutProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities"></a>

```csharp
private void PutProtectionCapabilities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilities.parameter.value"></a>

- *Type:* object

---

##### `PutProtectionCapabilitySettings` <a name="PutProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings"></a>

```csharp
private void PutProtectionCapabilitySettings(WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.putProtectionCapabilitySettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---

##### `ResetCondition` <a name="ResetCondition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetConditionLanguage` <a name="ResetConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetConditionLanguage"></a>

```csharp
private void ResetConditionLanguage()
```

##### `ResetIsBodyInspectionEnabled` <a name="ResetIsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetIsBodyInspectionEnabled"></a>

```csharp
private void ResetIsBodyInspectionEnabled()
```

##### `ResetProtectionCapabilitySettings` <a name="ResetProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.resetProtectionCapabilitySettings"></a>

```csharp
private void ResetProtectionCapabilitySettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities">ProtectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">ProtectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguageInput">ConditionLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabledInput">IsBodyInspectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitiesInput">ProtectionCapabilitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettingsInput">ProtectionCapabilitySettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage">ConditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">IsBodyInspectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProtectionCapabilities`<sup>Required</sup> <a name="ProtectionCapabilities" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList ProtectionCapabilities { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `ProtectionCapabilitySettings`<sup>Required</sup> <a name="ProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference ProtectionCapabilitySettings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `ConditionLanguageInput`<sup>Optional</sup> <a name="ConditionLanguageInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguageInput"></a>

```csharp
public string ConditionLanguageInput { get; }
```

- *Type:* string

---

##### `IsBodyInspectionEnabledInput`<sup>Optional</sup> <a name="IsBodyInspectionEnabledInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabledInput"></a>

```csharp
public object IsBodyInspectionEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtectionCapabilitiesInput`<sup>Optional</sup> <a name="ProtectionCapabilitiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitiesInput"></a>

```csharp
public object ProtectionCapabilitiesInput { get; }
```

- *Type:* object

---

##### `ProtectionCapabilitySettingsInput`<sup>Optional</sup> <a name="ProtectionCapabilitySettingsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.protectionCapabilitySettingsInput"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings ProtectionCapabilitySettingsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `ConditionLanguage`<sup>Required</sup> <a name="ConditionLanguage" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```csharp
public string ConditionLanguage { get; }
```

- *Type:* string

---

##### `IsBodyInspectionEnabled`<sup>Required</sup> <a name="IsBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```csharp
public object IsBodyInspectionEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```csharp
private WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies">ResetRequestCookies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgs` <a name="ResetArgs" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetRequestCookies` <a name="ResetRequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resetRequestCookies"></a>

```csharp
private void ResetRequestCookies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput">RequestCookiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">RequestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `RequestCookiesInput`<sup>Optional</sup> <a name="RequestCookiesInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookiesInput"></a>

```csharp
public string[] RequestCookiesInput { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `RequestCookies`<sup>Required</sup> <a name="RequestCookies" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```csharp
public string[] RequestCookies { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```csharp
private WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights">PutCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions">PutExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetActionName">ResetActionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold">ResetCollaborativeActionThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights">ResetCollaborativeWeights</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCollaborativeWeights` <a name="PutCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights"></a>

```csharp
private void PutCollaborativeWeights(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putCollaborativeWeights.parameter.value"></a>

- *Type:* object

---

##### `PutExclusions` <a name="PutExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions"></a>

```csharp
private void PutExclusions(WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.putExclusions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `ResetActionName` <a name="ResetActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetActionName"></a>

```csharp
private void ResetActionName()
```

##### `ResetCollaborativeActionThreshold` <a name="ResetCollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeActionThreshold"></a>

```csharp
private void ResetCollaborativeActionThreshold()
```

##### `ResetCollaborativeWeights` <a name="ResetCollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetCollaborativeWeights"></a>

```csharp
private void ResetCollaborativeWeights()
```

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">CollaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">Exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput">CollaborativeActionThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput">CollaborativeWeightsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">ActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">CollaborativeActionThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CollaborativeWeights`<sup>Required</sup> <a name="CollaborativeWeights" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList CollaborativeWeights { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference Exclusions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference</a>

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionNameInput"></a>

```csharp
public string ActionNameInput { get; }
```

- *Type:* string

---

##### `CollaborativeActionThresholdInput`<sup>Optional</sup> <a name="CollaborativeActionThresholdInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThresholdInput"></a>

```csharp
public double CollaborativeActionThresholdInput { get; }
```

- *Type:* double

---

##### `CollaborativeWeightsInput`<sup>Optional</sup> <a name="CollaborativeWeightsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeightsInput"></a>

```csharp
public object CollaborativeWeightsInput { get; }
```

- *Type:* object

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusionsInput"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions ExclusionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```csharp
public string ActionName { get; }
```

- *Type:* string

---

##### `CollaborativeActionThreshold`<sup>Required</sup> <a name="CollaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```csharp
public double CollaborativeActionThreshold { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods">ResetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength">ResetMaxHttpRequestHeaderLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders">ResetMaxHttpRequestHeaders</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments">ResetMaxNumberOfArguments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength">ResetMaxSingleArgumentLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength">ResetMaxTotalArgumentLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHttpMethods` <a name="ResetAllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetAllowedHttpMethods"></a>

```csharp
private void ResetAllowedHttpMethods()
```

##### `ResetMaxHttpRequestHeaderLength` <a name="ResetMaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaderLength"></a>

```csharp
private void ResetMaxHttpRequestHeaderLength()
```

##### `ResetMaxHttpRequestHeaders` <a name="ResetMaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxHttpRequestHeaders"></a>

```csharp
private void ResetMaxHttpRequestHeaders()
```

##### `ResetMaxNumberOfArguments` <a name="ResetMaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxNumberOfArguments"></a>

```csharp
private void ResetMaxNumberOfArguments()
```

##### `ResetMaxSingleArgumentLength` <a name="ResetMaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxSingleArgumentLength"></a>

```csharp
private void ResetMaxSingleArgumentLength()
```

##### `ResetMaxTotalArgumentLength` <a name="ResetMaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resetMaxTotalArgumentLength"></a>

```csharp
private void ResetMaxTotalArgumentLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput">AllowedHttpMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput">MaxHttpRequestHeaderLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput">MaxHttpRequestHeadersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput">MaxNumberOfArgumentsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput">MaxSingleArgumentLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput">MaxTotalArgumentLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">AllowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">MaxHttpRequestHeaderLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">MaxHttpRequestHeaders</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">MaxNumberOfArguments</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">MaxSingleArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">MaxTotalArgumentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHttpMethodsInput`<sup>Optional</sup> <a name="AllowedHttpMethodsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethodsInput"></a>

```csharp
public string[] AllowedHttpMethodsInput { get; }
```

- *Type:* string[]

---

##### `MaxHttpRequestHeaderLengthInput`<sup>Optional</sup> <a name="MaxHttpRequestHeaderLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLengthInput"></a>

```csharp
public double MaxHttpRequestHeaderLengthInput { get; }
```

- *Type:* double

---

##### `MaxHttpRequestHeadersInput`<sup>Optional</sup> <a name="MaxHttpRequestHeadersInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeadersInput"></a>

```csharp
public double MaxHttpRequestHeadersInput { get; }
```

- *Type:* double

---

##### `MaxNumberOfArgumentsInput`<sup>Optional</sup> <a name="MaxNumberOfArgumentsInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArgumentsInput"></a>

```csharp
public double MaxNumberOfArgumentsInput { get; }
```

- *Type:* double

---

##### `MaxSingleArgumentLengthInput`<sup>Optional</sup> <a name="MaxSingleArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLengthInput"></a>

```csharp
public double MaxSingleArgumentLengthInput { get; }
```

- *Type:* double

---

##### `MaxTotalArgumentLengthInput`<sup>Optional</sup> <a name="MaxTotalArgumentLengthInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLengthInput"></a>

```csharp
public double MaxTotalArgumentLengthInput { get; }
```

- *Type:* double

---

##### `AllowedHttpMethods`<sup>Required</sup> <a name="AllowedHttpMethods" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```csharp
public string[] AllowedHttpMethods { get; }
```

- *Type:* string[]

---

##### `MaxHttpRequestHeaderLength`<sup>Required</sup> <a name="MaxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```csharp
public double MaxHttpRequestHeaderLength { get; }
```

- *Type:* double

---

##### `MaxHttpRequestHeaders`<sup>Required</sup> <a name="MaxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```csharp
public double MaxHttpRequestHeaders { get; }
```

- *Type:* double

---

##### `MaxNumberOfArguments`<sup>Required</sup> <a name="MaxNumberOfArguments" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```csharp
public double MaxNumberOfArguments { get; }
```

- *Type:* double

---

##### `MaxSingleArgumentLength`<sup>Required</sup> <a name="MaxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```csharp
public double MaxSingleArgumentLength { get; }
```

- *Type:* double

---

##### `MaxTotalArgumentLength`<sup>Required</sup> <a name="MaxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```csharp
public double MaxTotalArgumentLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```csharp
public WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings">WafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings</a>

---


### WafWebAppFirewallPolicyTimeoutsOutputReference <a name="WafWebAppFirewallPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new WafWebAppFirewallPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.wafWebAppFirewallPolicy.WafWebAppFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



