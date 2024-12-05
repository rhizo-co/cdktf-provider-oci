# `dataSafeDatabaseSecurityConfig` Submodule <a name="`dataSafeDatabaseSecurityConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDatabaseSecurityConfig <a name="DataSafeDatabaseSecurityConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config oci_data_safe_database_security_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeDatabaseSecurityConfig(Construct Scope, string Id, DataSafeDatabaseSecurityConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig">DataSafeDatabaseSecurityConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig">DataSafeDatabaseSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig">PutSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetRefreshTrigger">ResetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetSqlFirewallConfig">ResetSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSqlFirewallConfig` <a name="PutSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig"></a>

```csharp
private void PutSqlFirewallConfig(DataSafeDatabaseSecurityConfigSqlFirewallConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putSqlFirewallConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeDatabaseSecurityConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRefreshTrigger` <a name="ResetRefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetRefreshTrigger"></a>

```csharp
private void ResetRefreshTrigger()
```

##### `ResetSqlFirewallConfig` <a name="ResetSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetSqlFirewallConfig"></a>

```csharp
private void ResetSqlFirewallConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeDatabaseSecurityConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeDatabaseSecurityConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeDatabaseSecurityConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeDatabaseSecurityConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeDatabaseSecurityConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeDatabaseSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDatabaseSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeLastRefreshed">TimeLastRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference">DataSafeDatabaseSecurityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput">DatabaseSecurityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTriggerInput">RefreshTriggerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfigInput">SqlFirewallConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `SqlFirewallConfig`<sup>Required</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfig"></a>

```csharp
public DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference SqlFirewallConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference">DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeLastRefreshed`<sup>Required</sup> <a name="TimeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeLastRefreshed"></a>

```csharp
public string TimeLastRefreshed { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeouts"></a>

```csharp
public DataSafeDatabaseSecurityConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference">DataSafeDatabaseSecurityConfigTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DatabaseSecurityConfigIdInput`<sup>Optional</sup> <a name="DatabaseSecurityConfigIdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput"></a>

```csharp
public string DatabaseSecurityConfigIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RefreshTriggerInput`<sup>Optional</sup> <a name="RefreshTriggerInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTriggerInput"></a>

```csharp
public double RefreshTriggerInput { get; }
```

- *Type:* double

---

##### `SqlFirewallConfigInput`<sup>Optional</sup> <a name="SqlFirewallConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.sqlFirewallConfigInput"></a>

```csharp
public DataSafeDatabaseSecurityConfigSqlFirewallConfig SqlFirewallConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId"></a>

```csharp
public string DatabaseSecurityConfigId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.refreshTrigger"></a>

```csharp
public double RefreshTrigger { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDatabaseSecurityConfigConfig <a name="DataSafeDatabaseSecurityConfigConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeDatabaseSecurityConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseSecurityConfigId,
    string CompartmentId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    double RefreshTrigger = null,
    DataSafeDatabaseSecurityConfigSqlFirewallConfig SqlFirewallConfig = null,
    DataSafeDatabaseSecurityConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#database_security_config_id DataSafeDatabaseSecurityConfig#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#compartment_id DataSafeDatabaseSecurityConfig#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#defined_tags DataSafeDatabaseSecurityConfig#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#description DataSafeDatabaseSecurityConfig#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#display_name DataSafeDatabaseSecurityConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#freeform_tags DataSafeDatabaseSecurityConfig#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#id DataSafeDatabaseSecurityConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.refreshTrigger">RefreshTrigger</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#refresh_trigger DataSafeDatabaseSecurityConfig#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | sql_firewall_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId"></a>

```csharp
public string DatabaseSecurityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#database_security_config_id DataSafeDatabaseSecurityConfig#database_security_config_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#compartment_id DataSafeDatabaseSecurityConfig#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#defined_tags DataSafeDatabaseSecurityConfig#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#description DataSafeDatabaseSecurityConfig#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#display_name DataSafeDatabaseSecurityConfig#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#freeform_tags DataSafeDatabaseSecurityConfig#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#id DataSafeDatabaseSecurityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshTrigger`<sup>Optional</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.refreshTrigger"></a>

```csharp
public double RefreshTrigger { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#refresh_trigger DataSafeDatabaseSecurityConfig#refresh_trigger}.

---

##### `SqlFirewallConfig`<sup>Optional</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.sqlFirewallConfig"></a>

```csharp
public DataSafeDatabaseSecurityConfigSqlFirewallConfig SqlFirewallConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

sql_firewall_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#sql_firewall_config DataSafeDatabaseSecurityConfig#sql_firewall_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigConfig.property.timeouts"></a>

```csharp
public DataSafeDatabaseSecurityConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts">DataSafeDatabaseSecurityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#timeouts DataSafeDatabaseSecurityConfig#timeouts}

---

### DataSafeDatabaseSecurityConfigSqlFirewallConfig <a name="DataSafeDatabaseSecurityConfigSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeDatabaseSecurityConfigSqlFirewallConfig {
    string ExcludeJob = null,
    string Status = null,
    string ViolationLogAutoPurge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.excludeJob">ExcludeJob</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#exclude_job DataSafeDatabaseSecurityConfig#exclude_job}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#status DataSafeDatabaseSecurityConfig#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#violation_log_auto_purge DataSafeDatabaseSecurityConfig#violation_log_auto_purge}. |

---

##### `ExcludeJob`<sup>Optional</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.excludeJob"></a>

```csharp
public string ExcludeJob { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#exclude_job DataSafeDatabaseSecurityConfig#exclude_job}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#status DataSafeDatabaseSecurityConfig#status}.

---

##### `ViolationLogAutoPurge`<sup>Optional</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig.property.violationLogAutoPurge"></a>

```csharp
public string ViolationLogAutoPurge { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#violation_log_auto_purge DataSafeDatabaseSecurityConfig#violation_log_auto_purge}.

---

### DataSafeDatabaseSecurityConfigTimeouts <a name="DataSafeDatabaseSecurityConfigTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeDatabaseSecurityConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#create DataSafeDatabaseSecurityConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#delete DataSafeDatabaseSecurityConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#update DataSafeDatabaseSecurityConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#create DataSafeDatabaseSecurityConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#delete DataSafeDatabaseSecurityConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_database_security_config#update DataSafeDatabaseSecurityConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference <a name="DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetExcludeJob">ResetExcludeJob</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetViolationLogAutoPurge">ResetViolationLogAutoPurge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeJob` <a name="ResetExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetExcludeJob"></a>

```csharp
private void ResetExcludeJob()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetViolationLogAutoPurge` <a name="ResetViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resetViolationLogAutoPurge"></a>

```csharp
private void ResetViolationLogAutoPurge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJobInput">ExcludeJobInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput">ViolationLogAutoPurgeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob">ExcludeJob</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```csharp
public string TimeStatusUpdated { get; }
```

- *Type:* string

---

##### `ExcludeJobInput`<sup>Optional</sup> <a name="ExcludeJobInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJobInput"></a>

```csharp
public string ExcludeJobInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `ViolationLogAutoPurgeInput`<sup>Optional</sup> <a name="ViolationLogAutoPurgeInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurgeInput"></a>

```csharp
public string ViolationLogAutoPurgeInput { get; }
```

- *Type:* string

---

##### `ExcludeJob`<sup>Required</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob"></a>

```csharp
public string ExcludeJob { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ViolationLogAutoPurge`<sup>Required</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```csharp
public string ViolationLogAutoPurge { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue"></a>

```csharp
public DataSafeDatabaseSecurityConfigSqlFirewallConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigSqlFirewallConfig">DataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---


### DataSafeDatabaseSecurityConfigTimeoutsOutputReference <a name="DataSafeDatabaseSecurityConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeDatabaseSecurityConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeDatabaseSecurityConfig.DataSafeDatabaseSecurityConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



