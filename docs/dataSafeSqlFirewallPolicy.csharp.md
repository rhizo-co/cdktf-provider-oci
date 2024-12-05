# `dataSafeSqlFirewallPolicy` Submodule <a name="`dataSafeSqlFirewallPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSqlFirewallPolicy <a name="DataSafeSqlFirewallPolicy" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy oci_data_safe_sql_firewall_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicy(Construct Scope, string Id, DataSafeSqlFirewallPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig">DataSafeSqlFirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig">DataSafeSqlFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientIps">ResetAllowedClientIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientOsUsernames">ResetAllowedClientOsUsernames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientPrograms">ResetAllowedClientPrograms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetEnforcementScope">ResetEnforcementScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAction">ResetViolationAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAudit">ResetViolationAudit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeSqlFirewallPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

---

##### `ResetAllowedClientIps` <a name="ResetAllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientIps"></a>

```csharp
private void ResetAllowedClientIps()
```

##### `ResetAllowedClientOsUsernames` <a name="ResetAllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientOsUsernames"></a>

```csharp
private void ResetAllowedClientOsUsernames()
```

##### `ResetAllowedClientPrograms` <a name="ResetAllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetAllowedClientPrograms"></a>

```csharp
private void ResetAllowedClientPrograms()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnforcementScope` <a name="ResetEnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetEnforcementScope"></a>

```csharp
private void ResetEnforcementScope()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetViolationAction` <a name="ResetViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAction"></a>

```csharp
private void ResetViolationAction()
```

##### `ResetViolationAudit` <a name="ResetViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.resetViolationAudit"></a>

```csharp
private void ResetViolationAudit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeSqlFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSqlFirewallPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSqlFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSqlFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dbUserName">DbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlLevel">SqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference">DataSafeSqlFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIpsInput">AllowedClientIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernamesInput">AllowedClientOsUsernamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientProgramsInput">AllowedClientProgramsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScopeInput">EnforcementScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyIdInput">SqlFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationActionInput">ViolationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAuditInput">ViolationAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIps">AllowedClientIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScope">EnforcementScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAction">ViolationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAudit">ViolationAudit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.dbUserName"></a>

```csharp
public string DbUserName { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; }
```

- *Type:* string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlLevel"></a>

```csharp
public string SqlLevel { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeouts"></a>

```csharp
public DataSafeSqlFirewallPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference">DataSafeSqlFirewallPolicyTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AllowedClientIpsInput`<sup>Optional</sup> <a name="AllowedClientIpsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIpsInput"></a>

```csharp
public string[] AllowedClientIpsInput { get; }
```

- *Type:* string[]

---

##### `AllowedClientOsUsernamesInput`<sup>Optional</sup> <a name="AllowedClientOsUsernamesInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernamesInput"></a>

```csharp
public string[] AllowedClientOsUsernamesInput { get; }
```

- *Type:* string[]

---

##### `AllowedClientProgramsInput`<sup>Optional</sup> <a name="AllowedClientProgramsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientProgramsInput"></a>

```csharp
public string[] AllowedClientProgramsInput { get; }
```

- *Type:* string[]

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnforcementScopeInput`<sup>Optional</sup> <a name="EnforcementScopeInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScopeInput"></a>

```csharp
public string EnforcementScopeInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="SqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyIdInput"></a>

```csharp
public string SqlFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ViolationActionInput`<sup>Optional</sup> <a name="ViolationActionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationActionInput"></a>

```csharp
public string ViolationActionInput { get; }
```

- *Type:* string

---

##### `ViolationAuditInput`<sup>Optional</sup> <a name="ViolationAuditInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAuditInput"></a>

```csharp
public string ViolationAuditInput { get; }
```

- *Type:* string

---

##### `AllowedClientIps`<sup>Required</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientIps"></a>

```csharp
public string[] AllowedClientIps { get; }
```

- *Type:* string[]

---

##### `AllowedClientOsUsernames`<sup>Required</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientOsUsernames"></a>

```csharp
public string[] AllowedClientOsUsernames { get; }
```

- *Type:* string[]

---

##### `AllowedClientPrograms`<sup>Required</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.allowedClientPrograms"></a>

```csharp
public string[] AllowedClientPrograms { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnforcementScope`<sup>Required</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.enforcementScope"></a>

```csharp
public string EnforcementScope { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAction"></a>

```csharp
public string ViolationAction { get; }
```

- *Type:* string

---

##### `ViolationAudit`<sup>Required</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.violationAudit"></a>

```csharp
public string ViolationAudit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSqlFirewallPolicyConfig <a name="DataSafeSqlFirewallPolicyConfig" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SqlFirewallPolicyId,
    string[] AllowedClientIps = null,
    string[] AllowedClientOsUsernames = null,
    string[] AllowedClientPrograms = null,
    string CompartmentId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    string EnforcementScope = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string Status = null,
    DataSafeSqlFirewallPolicyTimeouts Timeouts = null,
    string ViolationAction = null,
    string ViolationAudit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientIps">AllowedClientIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.enforcementScope">EnforcementScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAction">ViolationAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAudit">ViolationAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#sql_firewall_policy_id DataSafeSqlFirewallPolicy#sql_firewall_policy_id}.

---

##### `AllowedClientIps`<sup>Optional</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientIps"></a>

```csharp
public string[] AllowedClientIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_ips DataSafeSqlFirewallPolicy#allowed_client_ips}.

---

##### `AllowedClientOsUsernames`<sup>Optional</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientOsUsernames"></a>

```csharp
public string[] AllowedClientOsUsernames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_os_usernames DataSafeSqlFirewallPolicy#allowed_client_os_usernames}.

---

##### `AllowedClientPrograms`<sup>Optional</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.allowedClientPrograms"></a>

```csharp
public string[] AllowedClientPrograms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#allowed_client_programs DataSafeSqlFirewallPolicy#allowed_client_programs}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#compartment_id DataSafeSqlFirewallPolicy#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#defined_tags DataSafeSqlFirewallPolicy#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#description DataSafeSqlFirewallPolicy#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#display_name DataSafeSqlFirewallPolicy#display_name}.

---

##### `EnforcementScope`<sup>Optional</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.enforcementScope"></a>

```csharp
public string EnforcementScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#enforcement_scope DataSafeSqlFirewallPolicy#enforcement_scope}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#freeform_tags DataSafeSqlFirewallPolicy#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#id DataSafeSqlFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#status DataSafeSqlFirewallPolicy#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.timeouts"></a>

```csharp
public DataSafeSqlFirewallPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts">DataSafeSqlFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#timeouts DataSafeSqlFirewallPolicy#timeouts}

---

##### `ViolationAction`<sup>Optional</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAction"></a>

```csharp
public string ViolationAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_action DataSafeSqlFirewallPolicy#violation_action}.

---

##### `ViolationAudit`<sup>Optional</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyConfig.property.violationAudit"></a>

```csharp
public string ViolationAudit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#violation_audit DataSafeSqlFirewallPolicy#violation_audit}.

---

### DataSafeSqlFirewallPolicyTimeouts <a name="DataSafeSqlFirewallPolicyTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#create DataSafeSqlFirewallPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#delete DataSafeSqlFirewallPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#update DataSafeSqlFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#create DataSafeSqlFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#delete DataSafeSqlFirewallPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy#update DataSafeSqlFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSqlFirewallPolicyTimeoutsOutputReference <a name="DataSafeSqlFirewallPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicy.DataSafeSqlFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



