# `dataSafeSqlFirewallPolicyManagement` Submodule <a name="`dataSafeSqlFirewallPolicyManagement` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSqlFirewallPolicyManagement <a name="DataSafeSqlFirewallPolicyManagement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management oci_data_safe_sql_firewall_policy_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicyManagement(Construct Scope, string Id, DataSafeSqlFirewallPolicyManagementConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig">DataSafeSqlFirewallPolicyManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig">DataSafeSqlFirewallPolicyManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps">ResetAllowedClientIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames">ResetAllowedClientOsUsernames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms">ResetAllowedClientPrograms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName">ResetDbUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope">ResetEnforcementScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId">ResetSqlFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction">ResetViolationAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit">ResetViolationAudit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeSqlFirewallPolicyManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

---

##### `ResetAllowedClientIps` <a name="ResetAllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientIps"></a>

```csharp
private void ResetAllowedClientIps()
```

##### `ResetAllowedClientOsUsernames` <a name="ResetAllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientOsUsernames"></a>

```csharp
private void ResetAllowedClientOsUsernames()
```

##### `ResetAllowedClientPrograms` <a name="ResetAllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetAllowedClientPrograms"></a>

```csharp
private void ResetAllowedClientPrograms()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDbUserName` <a name="ResetDbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDbUserName"></a>

```csharp
private void ResetDbUserName()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnforcementScope` <a name="ResetEnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetEnforcementScope"></a>

```csharp
private void ResetEnforcementScope()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSqlFirewallPolicyId` <a name="ResetSqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetSqlFirewallPolicyId"></a>

```csharp
private void ResetSqlFirewallPolicyId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTargetId"></a>

```csharp
private void ResetTargetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetViolationAction` <a name="ResetViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAction"></a>

```csharp
private void ResetViolationAction()
```

##### `ResetViolationAudit` <a name="ResetViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.resetViolationAudit"></a>

```csharp
private void ResetViolationAudit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicyManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicyManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicyManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeSqlFirewallPolicyManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeSqlFirewallPolicyManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeSqlFirewallPolicyManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeSqlFirewallPolicyManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSqlFirewallPolicyManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId">SecurityPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel">SqlLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput">AllowedClientIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput">AllowedClientOsUsernamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput">AllowedClientProgramsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput">DbUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput">EnforcementScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput">SqlFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput">TargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput">ViolationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput">ViolationAuditInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps">AllowedClientIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName">DbUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope">EnforcementScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction">ViolationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit">ViolationAudit</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SecurityPolicyId`<sup>Required</sup> <a name="SecurityPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.securityPolicyId"></a>

```csharp
public string SecurityPolicyId { get; }
```

- *Type:* string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlLevel"></a>

```csharp
public string SqlLevel { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeouts"></a>

```csharp
public DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference">DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AllowedClientIpsInput`<sup>Optional</sup> <a name="AllowedClientIpsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIpsInput"></a>

```csharp
public string[] AllowedClientIpsInput { get; }
```

- *Type:* string[]

---

##### `AllowedClientOsUsernamesInput`<sup>Optional</sup> <a name="AllowedClientOsUsernamesInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernamesInput"></a>

```csharp
public string[] AllowedClientOsUsernamesInput { get; }
```

- *Type:* string[]

---

##### `AllowedClientProgramsInput`<sup>Optional</sup> <a name="AllowedClientProgramsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientProgramsInput"></a>

```csharp
public string[] AllowedClientProgramsInput { get; }
```

- *Type:* string[]

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DbUserNameInput`<sup>Optional</sup> <a name="DbUserNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserNameInput"></a>

```csharp
public string DbUserNameInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnforcementScopeInput`<sup>Optional</sup> <a name="EnforcementScopeInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScopeInput"></a>

```csharp
public string EnforcementScopeInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyIdInput`<sup>Optional</sup> <a name="SqlFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyIdInput"></a>

```csharp
public string SqlFirewallPolicyIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetIdInput"></a>

```csharp
public string TargetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ViolationActionInput`<sup>Optional</sup> <a name="ViolationActionInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationActionInput"></a>

```csharp
public string ViolationActionInput { get; }
```

- *Type:* string

---

##### `ViolationAuditInput`<sup>Optional</sup> <a name="ViolationAuditInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAuditInput"></a>

```csharp
public string ViolationAuditInput { get; }
```

- *Type:* string

---

##### `AllowedClientIps`<sup>Required</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientIps"></a>

```csharp
public string[] AllowedClientIps { get; }
```

- *Type:* string[]

---

##### `AllowedClientOsUsernames`<sup>Required</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientOsUsernames"></a>

```csharp
public string[] AllowedClientOsUsernames { get; }
```

- *Type:* string[]

---

##### `AllowedClientPrograms`<sup>Required</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.allowedClientPrograms"></a>

```csharp
public string[] AllowedClientPrograms { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.dbUserName"></a>

```csharp
public string DbUserName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnforcementScope`<sup>Required</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.enforcementScope"></a>

```csharp
public string EnforcementScope { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `ViolationAction`<sup>Required</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAction"></a>

```csharp
public string ViolationAction { get; }
```

- *Type:* string

---

##### `ViolationAudit`<sup>Required</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.violationAudit"></a>

```csharp
public string ViolationAudit { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSqlFirewallPolicyManagementConfig <a name="DataSafeSqlFirewallPolicyManagementConfig" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicyManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] AllowedClientIps = null,
    string[] AllowedClientOsUsernames = null,
    string[] AllowedClientPrograms = null,
    string CompartmentId = null,
    string DbUserName = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    string EnforcementScope = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string SqlFirewallPolicyId = null,
    string State = null,
    string Status = null,
    string TargetId = null,
    DataSafeSqlFirewallPolicyManagementTimeouts Timeouts = null,
    string ViolationAction = null,
    string ViolationAudit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps">AllowedClientIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames">AllowedClientOsUsernames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms">AllowedClientPrograms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName">DbUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope">EnforcementScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId">TargetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction">ViolationAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit">ViolationAudit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowedClientIps`<sup>Optional</sup> <a name="AllowedClientIps" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientIps"></a>

```csharp
public string[] AllowedClientIps { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_ips DataSafeSqlFirewallPolicyManagement#allowed_client_ips}.

---

##### `AllowedClientOsUsernames`<sup>Optional</sup> <a name="AllowedClientOsUsernames" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientOsUsernames"></a>

```csharp
public string[] AllowedClientOsUsernames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_os_usernames DataSafeSqlFirewallPolicyManagement#allowed_client_os_usernames}.

---

##### `AllowedClientPrograms`<sup>Optional</sup> <a name="AllowedClientPrograms" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.allowedClientPrograms"></a>

```csharp
public string[] AllowedClientPrograms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#allowed_client_programs DataSafeSqlFirewallPolicyManagement#allowed_client_programs}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#compartment_id DataSafeSqlFirewallPolicyManagement#compartment_id}.

---

##### `DbUserName`<sup>Optional</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.dbUserName"></a>

```csharp
public string DbUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#db_user_name DataSafeSqlFirewallPolicyManagement#db_user_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#defined_tags DataSafeSqlFirewallPolicyManagement#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#description DataSafeSqlFirewallPolicyManagement#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#display_name DataSafeSqlFirewallPolicyManagement#display_name}.

---

##### `EnforcementScope`<sup>Optional</sup> <a name="EnforcementScope" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.enforcementScope"></a>

```csharp
public string EnforcementScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#enforcement_scope DataSafeSqlFirewallPolicyManagement#enforcement_scope}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#freeform_tags DataSafeSqlFirewallPolicyManagement#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#id DataSafeSqlFirewallPolicyManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SqlFirewallPolicyId`<sup>Optional</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.sqlFirewallPolicyId"></a>

```csharp
public string SqlFirewallPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#sql_firewall_policy_id DataSafeSqlFirewallPolicyManagement#sql_firewall_policy_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#state DataSafeSqlFirewallPolicyManagement#state}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#status DataSafeSqlFirewallPolicyManagement#status}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.targetId"></a>

```csharp
public string TargetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#target_id DataSafeSqlFirewallPolicyManagement#target_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.timeouts"></a>

```csharp
public DataSafeSqlFirewallPolicyManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts">DataSafeSqlFirewallPolicyManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#timeouts DataSafeSqlFirewallPolicyManagement#timeouts}

---

##### `ViolationAction`<sup>Optional</sup> <a name="ViolationAction" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAction"></a>

```csharp
public string ViolationAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_action DataSafeSqlFirewallPolicyManagement#violation_action}.

---

##### `ViolationAudit`<sup>Optional</sup> <a name="ViolationAudit" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementConfig.property.violationAudit"></a>

```csharp
public string ViolationAudit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#violation_audit DataSafeSqlFirewallPolicyManagement#violation_audit}.

---

### DataSafeSqlFirewallPolicyManagementTimeouts <a name="DataSafeSqlFirewallPolicyManagementTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicyManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#create DataSafeSqlFirewallPolicyManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#delete DataSafeSqlFirewallPolicyManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sql_firewall_policy_management#update DataSafeSqlFirewallPolicyManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference <a name="DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSqlFirewallPolicyManagement.DataSafeSqlFirewallPolicyManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



