# `dataSafeTargetDatabase` Submodule <a name="`dataSafeTargetDatabase` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeTargetDatabase <a name="DataSafeTargetDatabase" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database oci_data_safe_target_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabase(Construct Scope, string Id, DataSafeTargetDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig">DataSafeTargetDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig">DataSafeTargetDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putConnectionOption">PutConnectionOption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putDatabaseDetails">PutDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putPeerTargetDatabaseDetails">PutPeerTargetDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetConnectionOption">ResetConnectionOption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetPeerTargetDatabaseDetails">ResetPeerTargetDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionOption` <a name="PutConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putConnectionOption"></a>

```csharp
private void PutConnectionOption(DataSafeTargetDatabaseConnectionOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putConnectionOption.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

---

##### `PutCredentials` <a name="PutCredentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putCredentials"></a>

```csharp
private void PutCredentials(DataSafeTargetDatabaseCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

---

##### `PutDatabaseDetails` <a name="PutDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putDatabaseDetails"></a>

```csharp
private void PutDatabaseDetails(DataSafeTargetDatabaseDatabaseDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putDatabaseDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

---

##### `PutPeerTargetDatabaseDetails` <a name="PutPeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putPeerTargetDatabaseDetails"></a>

```csharp
private void PutPeerTargetDatabaseDetails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putPeerTargetDatabaseDetails.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(DataSafeTargetDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts">DataSafeTargetDatabaseTimeouts</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTlsConfig"></a>

```csharp
private void PutTlsConfig(DataSafeTargetDatabaseTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

---

##### `ResetConnectionOption` <a name="ResetConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetConnectionOption"></a>

```csharp
private void ResetConnectionOption()
```

##### `ResetCredentials` <a name="ResetCredentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPeerTargetDatabaseDetails` <a name="ResetPeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetPeerTargetDatabaseDetails"></a>

```csharp
private void ResetPeerTargetDatabaseDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeTargetDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeTargetDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeTargetDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeTargetDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataSafeTargetDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataSafeTargetDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataSafeTargetDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataSafeTargetDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeTargetDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.associatedResourceIds">AssociatedResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOption">ConnectionOption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference">DataSafeTargetDatabaseConnectionOptionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference">DataSafeTargetDatabaseCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference">DataSafeTargetDatabaseDatabaseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetails">PeerTargetDatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabases">PeerTargetDatabases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList">DataSafeTargetDatabasePeerTargetDatabasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference">DataSafeTargetDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference">DataSafeTargetDatabaseTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOptionInput">ConnectionOptionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetailsInput">DatabaseDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetailsInput">PeerTargetDatabaseDetailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssociatedResourceIds`<sup>Required</sup> <a name="AssociatedResourceIds" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.associatedResourceIds"></a>

```csharp
public string[] AssociatedResourceIds { get; }
```

- *Type:* string[]

---

##### `ConnectionOption`<sup>Required</sup> <a name="ConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOption"></a>

```csharp
public DataSafeTargetDatabaseConnectionOptionOutputReference ConnectionOption { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference">DataSafeTargetDatabaseConnectionOptionOutputReference</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentials"></a>

```csharp
public DataSafeTargetDatabaseCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference">DataSafeTargetDatabaseCredentialsOutputReference</a>

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetails"></a>

```csharp
public DataSafeTargetDatabaseDatabaseDetailsOutputReference DatabaseDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference">DataSafeTargetDatabaseDatabaseDetailsOutputReference</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PeerTargetDatabaseDetails`<sup>Required</sup> <a name="PeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetails"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsList PeerTargetDatabaseDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabaseDetailsList</a>

---

##### `PeerTargetDatabases`<sup>Required</sup> <a name="PeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabases"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabasesList PeerTargetDatabases { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList">DataSafeTargetDatabasePeerTargetDatabasesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeouts"></a>

```csharp
public DataSafeTargetDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference">DataSafeTargetDatabaseTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfig"></a>

```csharp
public DataSafeTargetDatabaseTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference">DataSafeTargetDatabaseTlsConfigOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConnectionOptionInput`<sup>Optional</sup> <a name="ConnectionOptionInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.connectionOptionInput"></a>

```csharp
public DataSafeTargetDatabaseConnectionOption ConnectionOptionInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.credentialsInput"></a>

```csharp
public DataSafeTargetDatabaseCredentials CredentialsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

---

##### `DatabaseDetailsInput`<sup>Optional</sup> <a name="DatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.databaseDetailsInput"></a>

```csharp
public DataSafeTargetDatabaseDatabaseDetails DatabaseDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PeerTargetDatabaseDetailsInput`<sup>Optional</sup> <a name="PeerTargetDatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.peerTargetDatabaseDetailsInput"></a>

```csharp
public object PeerTargetDatabaseDetailsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tlsConfigInput"></a>

```csharp
public DataSafeTargetDatabaseTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeTargetDatabaseConfig <a name="DataSafeTargetDatabaseConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    DataSafeTargetDatabaseDatabaseDetails DatabaseDetails,
    DataSafeTargetDatabaseConnectionOption ConnectionOption = null,
    DataSafeTargetDatabaseCredentials Credentials = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Description = null,
    string DisplayName = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    object PeerTargetDatabaseDetails = null,
    DataSafeTargetDatabaseTimeouts Timeouts = null,
    DataSafeTargetDatabaseTlsConfig TlsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#compartment_id DataSafeTargetDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a></code> | database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connectionOption">ConnectionOption</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a></code> | connection_option block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.credentials">Credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a></code> | credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#defined_tags DataSafeTargetDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#freeform_tags DataSafeTargetDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#id DataSafeTargetDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.peerTargetDatabaseDetails">PeerTargetDatabaseDetails</a></code> | <code>object</code> | peer_target_database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts">DataSafeTargetDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a></code> | tls_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#compartment_id DataSafeTargetDatabase#compartment_id}.

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.databaseDetails"></a>

```csharp
public DataSafeTargetDatabaseDatabaseDetails DatabaseDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_details DataSafeTargetDatabase#database_details}

---

##### `ConnectionOption`<sup>Optional</sup> <a name="ConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.connectionOption"></a>

```csharp
public DataSafeTargetDatabaseConnectionOption ConnectionOption { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

connection_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#connection_option DataSafeTargetDatabase#connection_option}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.credentials"></a>

```csharp
public DataSafeTargetDatabaseCredentials Credentials { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#credentials DataSafeTargetDatabase#credentials}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#defined_tags DataSafeTargetDatabase#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#freeform_tags DataSafeTargetDatabase#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#id DataSafeTargetDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeerTargetDatabaseDetails`<sup>Optional</sup> <a name="PeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.peerTargetDatabaseDetails"></a>

```csharp
public object PeerTargetDatabaseDetails { get; set; }
```

- *Type:* object

peer_target_database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#peer_target_database_details DataSafeTargetDatabase#peer_target_database_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.timeouts"></a>

```csharp
public DataSafeTargetDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts">DataSafeTargetDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#timeouts DataSafeTargetDatabase#timeouts}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConfig.property.tlsConfig"></a>

```csharp
public DataSafeTargetDatabaseTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#tls_config DataSafeTargetDatabase#tls_config}

---

### DataSafeTargetDatabaseConnectionOption <a name="DataSafeTargetDatabaseConnectionOption" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseConnectionOption {
    string ConnectionType,
    string DatasafePrivateEndpointId = null,
    string OnPremConnectorId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.connectionType">ConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#connection_type DataSafeTargetDatabase#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.datasafePrivateEndpointId">DatasafePrivateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#datasafe_private_endpoint_id DataSafeTargetDatabase#datasafe_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.onPremConnectorId">OnPremConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#on_prem_connector_id DataSafeTargetDatabase#on_prem_connector_id}. |

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#connection_type DataSafeTargetDatabase#connection_type}.

---

##### `DatasafePrivateEndpointId`<sup>Optional</sup> <a name="DatasafePrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.datasafePrivateEndpointId"></a>

```csharp
public string DatasafePrivateEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#datasafe_private_endpoint_id DataSafeTargetDatabase#datasafe_private_endpoint_id}.

---

##### `OnPremConnectorId`<sup>Optional</sup> <a name="OnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption.property.onPremConnectorId"></a>

```csharp
public string OnPremConnectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#on_prem_connector_id DataSafeTargetDatabase#on_prem_connector_id}.

---

### DataSafeTargetDatabaseCredentials <a name="DataSafeTargetDatabaseCredentials" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseCredentials {
    string Password,
    string UserName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#password DataSafeTargetDatabase#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#user_name DataSafeTargetDatabase#user_name}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#password DataSafeTargetDatabase#password}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#user_name DataSafeTargetDatabase#user_name}.

---

### DataSafeTargetDatabaseDatabaseDetails <a name="DataSafeTargetDatabaseDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseDatabaseDetails {
    string DatabaseType,
    string InfrastructureType,
    string AutonomousDatabaseId = null,
    string DbSystemId = null,
    string InstanceId = null,
    string[] IpAddresses = null,
    double ListenerPort = null,
    string ServiceName = null,
    string VmClusterId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.databaseType">DatabaseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.listenerPort">ListenerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}. |

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.databaseType"></a>

```csharp
public string DatabaseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}.

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}.

---

##### `AutonomousDatabaseId`<sup>Optional</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}.

---

##### `ListenerPort`<sup>Optional</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}.

---

##### `VmClusterId`<sup>Optional</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}.

---

### DataSafeTargetDatabasePeerTargetDatabaseDetails <a name="DataSafeTargetDatabasePeerTargetDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabaseDetails {
    DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails DatabaseDetails,
    string DataguardAssociationId = null,
    string Description = null,
    string DisplayName = null,
    DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig TlsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | database_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#dataguard_association_id DataSafeTargetDatabase#dataguard_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | tls_config block. |

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.databaseDetails"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails DatabaseDetails { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

database_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_details DataSafeTargetDatabase#database_details}

---

##### `DataguardAssociationId`<sup>Optional</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.dataguardAssociationId"></a>

```csharp
public string DataguardAssociationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#dataguard_association_id DataSafeTargetDatabase#dataguard_association_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#description DataSafeTargetDatabase#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#display_name DataSafeTargetDatabase#display_name}.

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetails.property.tlsConfig"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#tls_config DataSafeTargetDatabase#tls_config}

---

### DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails {
    string DatabaseType,
    string InfrastructureType,
    string AutonomousDatabaseId = null,
    string DbSystemId = null,
    string InstanceId = null,
    string[] IpAddresses = null,
    double ListenerPort = null,
    string ServiceName = null,
    string VmClusterId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.databaseType">DatabaseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.listenerPort">ListenerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}. |

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.databaseType"></a>

```csharp
public string DatabaseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#database_type DataSafeTargetDatabase#database_type}.

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#infrastructure_type DataSafeTargetDatabase#infrastructure_type}.

---

##### `AutonomousDatabaseId`<sup>Optional</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#autonomous_database_id DataSafeTargetDatabase#autonomous_database_id}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#db_system_id DataSafeTargetDatabase#db_system_id}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#instance_id DataSafeTargetDatabase#instance_id}.

---

##### `IpAddresses`<sup>Optional</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#ip_addresses DataSafeTargetDatabase#ip_addresses}.

---

##### `ListenerPort`<sup>Optional</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#listener_port DataSafeTargetDatabase#listener_port}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#service_name DataSafeTargetDatabase#service_name}.

---

##### `VmClusterId`<sup>Optional</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#vm_cluster_id DataSafeTargetDatabase#vm_cluster_id}.

---

### DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig {
    string Status,
    string CertificateStoreType = null,
    string KeyStoreContent = null,
    string StorePassword = null,
    string TrustStoreContent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.certificateStoreType">CertificateStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.keyStoreContent">KeyStoreContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.storePassword">StorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.trustStoreContent">TrustStoreContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}.

---

##### `CertificateStoreType`<sup>Optional</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.certificateStoreType"></a>

```csharp
public string CertificateStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}.

---

##### `KeyStoreContent`<sup>Optional</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.keyStoreContent"></a>

```csharp
public string KeyStoreContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}.

---

##### `StorePassword`<sup>Optional</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.storePassword"></a>

```csharp
public string StorePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}.

---

##### `TrustStoreContent`<sup>Optional</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig.property.trustStoreContent"></a>

```csharp
public string TrustStoreContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}.

---

### DataSafeTargetDatabasePeerTargetDatabases <a name="DataSafeTargetDatabasePeerTargetDatabases" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabases {

};
```


### DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails <a name="DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails {

};
```


### DataSafeTargetDatabasePeerTargetDatabasesTlsConfig <a name="DataSafeTargetDatabasePeerTargetDatabasesTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesTlsConfig {

};
```


### DataSafeTargetDatabaseTimeouts <a name="DataSafeTargetDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#create DataSafeTargetDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#delete DataSafeTargetDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#update DataSafeTargetDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#create DataSafeTargetDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#delete DataSafeTargetDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#update DataSafeTargetDatabase#update}.

---

### DataSafeTargetDatabaseTlsConfig <a name="DataSafeTargetDatabaseTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseTlsConfig {
    string Status,
    string CertificateStoreType = null,
    string KeyStoreContent = null,
    string StorePassword = null,
    string TrustStoreContent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.certificateStoreType">CertificateStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.keyStoreContent">KeyStoreContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.storePassword">StorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.trustStoreContent">TrustStoreContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#status DataSafeTargetDatabase#status}.

---

##### `CertificateStoreType`<sup>Optional</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.certificateStoreType"></a>

```csharp
public string CertificateStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#certificate_store_type DataSafeTargetDatabase#certificate_store_type}.

---

##### `KeyStoreContent`<sup>Optional</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.keyStoreContent"></a>

```csharp
public string KeyStoreContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#key_store_content DataSafeTargetDatabase#key_store_content}.

---

##### `StorePassword`<sup>Optional</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.storePassword"></a>

```csharp
public string StorePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#store_password DataSafeTargetDatabase#store_password}.

---

##### `TrustStoreContent`<sup>Optional</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig.property.trustStoreContent"></a>

```csharp
public string TrustStoreContent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_target_database#trust_store_content DataSafeTargetDatabase#trust_store_content}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeTargetDatabaseConnectionOptionOutputReference <a name="DataSafeTargetDatabaseConnectionOptionOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseConnectionOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetDatasafePrivateEndpointId">ResetDatasafePrivateEndpointId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetOnPremConnectorId">ResetOnPremConnectorId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasafePrivateEndpointId` <a name="ResetDatasafePrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetDatasafePrivateEndpointId"></a>

```csharp
private void ResetDatasafePrivateEndpointId()
```

##### `ResetOnPremConnectorId` <a name="ResetOnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.resetOnPremConnectorId"></a>

```csharp
private void ResetOnPremConnectorId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointIdInput">DatasafePrivateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorIdInput">OnPremConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId">DatasafePrivateEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId">OnPremConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `DatasafePrivateEndpointIdInput`<sup>Optional</sup> <a name="DatasafePrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointIdInput"></a>

```csharp
public string DatasafePrivateEndpointIdInput { get; }
```

- *Type:* string

---

##### `OnPremConnectorIdInput`<sup>Optional</sup> <a name="OnPremConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorIdInput"></a>

```csharp
public string OnPremConnectorIdInput { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `DatasafePrivateEndpointId`<sup>Required</sup> <a name="DatasafePrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.datasafePrivateEndpointId"></a>

```csharp
public string DatasafePrivateEndpointId { get; }
```

- *Type:* string

---

##### `OnPremConnectorId`<sup>Required</sup> <a name="OnPremConnectorId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.onPremConnectorId"></a>

```csharp
public string OnPremConnectorId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOptionOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabaseConnectionOption InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseConnectionOption">DataSafeTargetDatabaseConnectionOption</a>

---


### DataSafeTargetDatabaseCredentialsOutputReference <a name="DataSafeTargetDatabaseCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentialsOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabaseCredentials InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseCredentials">DataSafeTargetDatabaseCredentials</a>

---


### DataSafeTargetDatabaseDatabaseDetailsOutputReference <a name="DataSafeTargetDatabaseDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseDatabaseDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetAutonomousDatabaseId">ResetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetListenerPort">ResetListenerPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetVmClusterId">ResetVmClusterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutonomousDatabaseId` <a name="ResetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetAutonomousDatabaseId"></a>

```csharp
private void ResetAutonomousDatabaseId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```

##### `ResetListenerPort` <a name="ResetListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetListenerPort"></a>

```csharp
private void ResetListenerPort()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetVmClusterId` <a name="ResetVmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.resetVmClusterId"></a>

```csharp
private void ResetVmClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureTypeInput">InfrastructureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseTypeInput"></a>

```csharp
public string DatabaseTypeInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `InfrastructureTypeInput`<sup>Optional</sup> <a name="InfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureTypeInput"></a>

```csharp
public string InfrastructureTypeInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterIdInput"></a>

```csharp
public string VmClusterIdInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetailsOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabaseDatabaseDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseDatabaseDetails">DataSafeTargetDatabaseDatabaseDetails</a>

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetAutonomousDatabaseId">ResetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetIpAddresses">ResetIpAddresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetListenerPort">ResetListenerPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetVmClusterId">ResetVmClusterId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutonomousDatabaseId` <a name="ResetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetAutonomousDatabaseId"></a>

```csharp
private void ResetAutonomousDatabaseId()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetIpAddresses` <a name="ResetIpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetIpAddresses"></a>

```csharp
private void ResetIpAddresses()
```

##### `ResetListenerPort` <a name="ResetListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetListenerPort"></a>

```csharp
private void ResetListenerPort()
```

##### `ResetServiceName` <a name="ResetServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetVmClusterId` <a name="ResetVmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.resetVmClusterId"></a>

```csharp
private void ResetVmClusterId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseTypeInput">DatabaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureTypeInput">InfrastructureTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddressesInput">IpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatabaseTypeInput`<sup>Optional</sup> <a name="DatabaseTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseTypeInput"></a>

```csharp
public string DatabaseTypeInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `InfrastructureTypeInput`<sup>Optional</sup> <a name="InfrastructureTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureTypeInput"></a>

```csharp
public string InfrastructureTypeInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddressesInput"></a>

```csharp
public string[] IpAddressesInput { get; }
```

- *Type:* string[]

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterIdInput"></a>

```csharp
public string VmClusterIdInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsList <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabaseDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.get"></a>

```csharp
private DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putDatabaseDetails">PutDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDataguardAssociationId">ResetDataguardAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatabaseDetails` <a name="PutDatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putDatabaseDetails"></a>

```csharp
private void PutDatabaseDetails(DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putDatabaseDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putTlsConfig"></a>

```csharp
private void PutTlsConfig(DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---

##### `ResetDataguardAssociationId` <a name="ResetDataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDataguardAssociationId"></a>

```csharp
private void ResetDataguardAssociationId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetailsInput">DatabaseDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationIdInput">DataguardAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetails"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference DatabaseDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetailsOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfig"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference</a>

---

##### `DatabaseDetailsInput`<sup>Optional</sup> <a name="DatabaseDetailsInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.databaseDetailsInput"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails DatabaseDetailsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabaseDetailsDatabaseDetails</a>

---

##### `DataguardAssociationIdInput`<sup>Optional</sup> <a name="DataguardAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationIdInput"></a>

```csharp
public string DataguardAssociationIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.tlsConfigInput"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---

##### `DataguardAssociationId`<sup>Required</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.dataguardAssociationId"></a>

```csharp
public string DataguardAssociationId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetCertificateStoreType">ResetCertificateStoreType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetKeyStoreContent">ResetKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetStorePassword">ResetStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetTrustStoreContent">ResetTrustStoreContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStoreType` <a name="ResetCertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetCertificateStoreType"></a>

```csharp
private void ResetCertificateStoreType()
```

##### `ResetKeyStoreContent` <a name="ResetKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetKeyStoreContent"></a>

```csharp
private void ResetKeyStoreContent()
```

##### `ResetStorePassword` <a name="ResetStorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetStorePassword"></a>

```csharp
private void ResetStorePassword()
```

##### `ResetTrustStoreContent` <a name="ResetTrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.resetTrustStoreContent"></a>

```csharp
private void ResetTrustStoreContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreTypeInput">CertificateStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContentInput">KeyStoreContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePasswordInput">StorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContentInput">TrustStoreContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateStoreTypeInput`<sup>Optional</sup> <a name="CertificateStoreTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreTypeInput"></a>

```csharp
public string CertificateStoreTypeInput { get; }
```

- *Type:* string

---

##### `KeyStoreContentInput`<sup>Optional</sup> <a name="KeyStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContentInput"></a>

```csharp
public string KeyStoreContentInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StorePasswordInput`<sup>Optional</sup> <a name="StorePasswordInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePasswordInput"></a>

```csharp
public string StorePasswordInput { get; }
```

- *Type:* string

---

##### `TrustStoreContentInput`<sup>Optional</sup> <a name="TrustStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContentInput"></a>

```csharp
public string TrustStoreContentInput { get; }
```

- *Type:* string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.certificateStoreType"></a>

```csharp
public string CertificateStoreType { get; }
```

- *Type:* string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.keyStoreContent"></a>

```csharp
public string KeyStoreContent { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.storePassword"></a>

```csharp
public string StorePassword { get; }
```

- *Type:* string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.trustStoreContent"></a>

```csharp
public string TrustStoreContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfigOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig">DataSafeTargetDatabasePeerTargetDatabaseDetailsTlsConfig</a>

---


### DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList <a name="DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get"></a>

```csharp
private DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType">DatabaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType">InfrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.databaseType"></a>

```csharp
public string DatabaseType { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `InfrastructureType`<sup>Required</sup> <a name="InfrastructureType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.infrastructureType"></a>

```csharp
public string InfrastructureType { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetails</a>

---


### DataSafeTargetDatabasePeerTargetDatabasesList <a name="DataSafeTargetDatabasePeerTargetDatabasesList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.get"></a>

```csharp
private DataSafeTargetDatabasePeerTargetDatabasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeTargetDatabasePeerTargetDatabasesOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabasesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails">DatabaseDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName">DatabaseUniqueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId">DataguardAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key">Key</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases">DataSafeTargetDatabasePeerTargetDatabases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseDetails`<sup>Required</sup> <a name="DatabaseDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseDetails"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList DatabaseDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList">DataSafeTargetDatabasePeerTargetDatabasesDatabaseDetailsList</a>

---

##### `DatabaseUniqueName`<sup>Required</sup> <a name="DatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.databaseUniqueName"></a>

```csharp
public string DatabaseUniqueName { get; }
```

- *Type:* string

---

##### `DataguardAssociationId`<sup>Required</sup> <a name="DataguardAssociationId" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.dataguardAssociationId"></a>

```csharp
public string DataguardAssociationId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.key"></a>

```csharp
public double Key { get; }
```

- *Type:* double

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.tlsConfig"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList TlsConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList">DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabases InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabases">DataSafeTargetDatabasePeerTargetDatabases</a>

---


### DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList <a name="DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get"></a>

```csharp
private DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference <a name="DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.certificateStoreType"></a>

```csharp
public string CertificateStoreType { get; }
```

- *Type:* string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.keyStoreContent"></a>

```csharp
public string KeyStoreContent { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.storePassword"></a>

```csharp
public string StorePassword { get; }
```

- *Type:* string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.trustStoreContent"></a>

```csharp
public string TrustStoreContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfigOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabasePeerTargetDatabasesTlsConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabasePeerTargetDatabasesTlsConfig">DataSafeTargetDatabasePeerTargetDatabasesTlsConfig</a>

---


### DataSafeTargetDatabaseTimeoutsOutputReference <a name="DataSafeTargetDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataSafeTargetDatabaseTlsConfigOutputReference <a name="DataSafeTargetDatabaseTlsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataSafeTargetDatabaseTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetCertificateStoreType">ResetCertificateStoreType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetKeyStoreContent">ResetKeyStoreContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetStorePassword">ResetStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetTrustStoreContent">ResetTrustStoreContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateStoreType` <a name="ResetCertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetCertificateStoreType"></a>

```csharp
private void ResetCertificateStoreType()
```

##### `ResetKeyStoreContent` <a name="ResetKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetKeyStoreContent"></a>

```csharp
private void ResetKeyStoreContent()
```

##### `ResetStorePassword` <a name="ResetStorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetStorePassword"></a>

```csharp
private void ResetStorePassword()
```

##### `ResetTrustStoreContent` <a name="ResetTrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.resetTrustStoreContent"></a>

```csharp
private void ResetTrustStoreContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreTypeInput">CertificateStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContentInput">KeyStoreContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePasswordInput">StorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContentInput">TrustStoreContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType">CertificateStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword">StorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent">TrustStoreContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateStoreTypeInput`<sup>Optional</sup> <a name="CertificateStoreTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreTypeInput"></a>

```csharp
public string CertificateStoreTypeInput { get; }
```

- *Type:* string

---

##### `KeyStoreContentInput`<sup>Optional</sup> <a name="KeyStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContentInput"></a>

```csharp
public string KeyStoreContentInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StorePasswordInput`<sup>Optional</sup> <a name="StorePasswordInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePasswordInput"></a>

```csharp
public string StorePasswordInput { get; }
```

- *Type:* string

---

##### `TrustStoreContentInput`<sup>Optional</sup> <a name="TrustStoreContentInput" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContentInput"></a>

```csharp
public string TrustStoreContentInput { get; }
```

- *Type:* string

---

##### `CertificateStoreType`<sup>Required</sup> <a name="CertificateStoreType" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.certificateStoreType"></a>

```csharp
public string CertificateStoreType { get; }
```

- *Type:* string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.keyStoreContent"></a>

```csharp
public string KeyStoreContent { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorePassword`<sup>Required</sup> <a name="StorePassword" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.storePassword"></a>

```csharp
public string StorePassword { get; }
```

- *Type:* string

---

##### `TrustStoreContent`<sup>Required</sup> <a name="TrustStoreContent" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.trustStoreContent"></a>

```csharp
public string TrustStoreContent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfigOutputReference.property.internalValue"></a>

```csharp
public DataSafeTargetDatabaseTlsConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeTargetDatabase.DataSafeTargetDatabaseTlsConfig">DataSafeTargetDatabaseTlsConfig</a>

---



