# `databaseVmClusterNetwork` Submodule <a name="`databaseVmClusterNetwork` Submodule" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseVmClusterNetwork <a name="DatabaseVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network oci_database_vm_cluster_network}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetwork(Construct Scope, string Id, DatabaseVmClusterNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig">DatabaseVmClusterNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig">DatabaseVmClusterNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans">PutDrScans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans">PutScans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks">PutVmNetworks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDrScans">ResetDrScans</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetNtp">ResetNtp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetValidateVmClusterNetwork">ResetValidateVmClusterNetwork</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDrScans` <a name="PutDrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans"></a>

```csharp
private void PutDrScans(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putDrScans.parameter.value"></a>

- *Type:* object

---

##### `PutScans` <a name="PutScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans"></a>

```csharp
private void PutScans(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putScans.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseVmClusterNetworkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

---

##### `PutVmNetworks` <a name="PutVmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks"></a>

```csharp
private void PutVmNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.putVmNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetAction` <a name="ResetAction" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDns` <a name="ResetDns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDns"></a>

```csharp
private void ResetDns()
```

##### `ResetDrScans` <a name="ResetDrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetDrScans"></a>

```csharp
private void ResetDrScans()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNtp` <a name="ResetNtp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetNtp"></a>

```csharp
private void ResetNtp()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetValidateVmClusterNetwork` <a name="ResetValidateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.resetValidateVmClusterNetwork"></a>

```csharp
private void ResetValidateVmClusterNetwork()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseVmClusterNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseVmClusterNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseVmClusterNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseVmClusterNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseVmClusterNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScans">DrScans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList">DatabaseVmClusterNetworkDrScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scans">Scans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList">DatabaseVmClusterNetworkScansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference">DatabaseVmClusterNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworks">VmNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList">DatabaseVmClusterNetworkVmNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dnsInput">DnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScansInput">DrScansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureIdInput">ExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntpInput">NtpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scansInput">ScansInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetworkInput">ValidateVmClusterNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworksInput">VmNetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dns">Dns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntp">Ntp</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetwork">ValidateVmClusterNetwork</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DrScans`<sup>Required</sup> <a name="DrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScans"></a>

```csharp
public DatabaseVmClusterNetworkDrScansList DrScans { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList">DatabaseVmClusterNetworkDrScansList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Scans`<sup>Required</sup> <a name="Scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scans"></a>

```csharp
public DatabaseVmClusterNetworkScansList Scans { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList">DatabaseVmClusterNetworkScansList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeouts"></a>

```csharp
public DatabaseVmClusterNetworkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference">DatabaseVmClusterNetworkTimeoutsOutputReference</a>

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

##### `VmNetworks`<sup>Required</sup> <a name="VmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworks"></a>

```csharp
public DatabaseVmClusterNetworkVmNetworksList VmNetworks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList">DatabaseVmClusterNetworkVmNetworksList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dnsInput"></a>

```csharp
public string[] DnsInput { get; }
```

- *Type:* string[]

---

##### `DrScansInput`<sup>Optional</sup> <a name="DrScansInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.drScansInput"></a>

```csharp
public object DrScansInput { get; }
```

- *Type:* object

---

##### `ExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureIdInput"></a>

```csharp
public string ExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NtpInput`<sup>Optional</sup> <a name="NtpInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntpInput"></a>

```csharp
public string[] NtpInput { get; }
```

- *Type:* string[]

---

##### `ScansInput`<sup>Optional</sup> <a name="ScansInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.scansInput"></a>

```csharp
public object ScansInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidateVmClusterNetworkInput`<sup>Optional</sup> <a name="ValidateVmClusterNetworkInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetworkInput"></a>

```csharp
public object ValidateVmClusterNetworkInput { get; }
```

- *Type:* object

---

##### `VmNetworksInput`<sup>Optional</sup> <a name="VmNetworksInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.vmNetworksInput"></a>

```csharp
public object VmNetworksInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.dns"></a>

```csharp
public string[] Dns { get; }
```

- *Type:* string[]

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ntp`<sup>Required</sup> <a name="Ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.ntp"></a>

```csharp
public string[] Ntp { get; }
```

- *Type:* string[]

---

##### `ValidateVmClusterNetwork`<sup>Required</sup> <a name="ValidateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.validateVmClusterNetwork"></a>

```csharp
public object ValidateVmClusterNetwork { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseVmClusterNetworkConfig <a name="DatabaseVmClusterNetworkConfig" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string DisplayName,
    string ExadataInfrastructureId,
    object Scans,
    object VmNetworks,
    string Action = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string[] Dns = null,
    object DrScans = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string[] Ntp = null,
    DatabaseVmClusterNetworkTimeouts Timeouts = null,
    object ValidateVmClusterNetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.scans">Scans</a></code> | <code>object</code> | scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.vmNetworks">VmNetworks</a></code> | <code>object</code> | vm_networks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dns">Dns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.drScans">DrScans</a></code> | <code>object</code> | dr_scans block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.ntp">Ntp</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.validateVmClusterNetwork">ValidateVmClusterNetwork</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#compartment_id DatabaseVmClusterNetwork#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#display_name DatabaseVmClusterNetwork#display_name}.

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.exadataInfrastructureId"></a>

```csharp
public string ExadataInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#exadata_infrastructure_id DatabaseVmClusterNetwork#exadata_infrastructure_id}.

---

##### `Scans`<sup>Required</sup> <a name="Scans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.scans"></a>

```csharp
public object Scans { get; set; }
```

- *Type:* object

scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scans DatabaseVmClusterNetwork#scans}

---

##### `VmNetworks`<sup>Required</sup> <a name="VmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.vmNetworks"></a>

```csharp
public object VmNetworks { get; set; }
```

- *Type:* object

vm_networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vm_networks DatabaseVmClusterNetwork#vm_networks}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#action DatabaseVmClusterNetwork#action}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#defined_tags DatabaseVmClusterNetwork#defined_tags}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.dns"></a>

```csharp
public string[] Dns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dns DatabaseVmClusterNetwork#dns}.

---

##### `DrScans`<sup>Optional</sup> <a name="DrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.drScans"></a>

```csharp
public object DrScans { get; set; }
```

- *Type:* object

dr_scans block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#dr_scans DatabaseVmClusterNetwork#dr_scans}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#freeform_tags DatabaseVmClusterNetwork#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#id DatabaseVmClusterNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ntp`<sup>Optional</sup> <a name="Ntp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.ntp"></a>

```csharp
public string[] Ntp { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ntp DatabaseVmClusterNetwork#ntp}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.timeouts"></a>

```csharp
public DatabaseVmClusterNetworkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts">DatabaseVmClusterNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#timeouts DatabaseVmClusterNetwork#timeouts}

---

##### `ValidateVmClusterNetwork`<sup>Optional</sup> <a name="ValidateVmClusterNetwork" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkConfig.property.validateVmClusterNetwork"></a>

```csharp
public object ValidateVmClusterNetwork { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#validate_vm_cluster_network DatabaseVmClusterNetwork#validate_vm_cluster_network}.

---

### DatabaseVmClusterNetworkDrScans <a name="DatabaseVmClusterNetworkDrScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkDrScans {
    string Hostname,
    string[] Ips,
    double ScanListenerPortTcp
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.ips">Ips</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.ips"></a>

```csharp
public string[] Ips { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}.

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScans.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}.

---

### DatabaseVmClusterNetworkScans <a name="DatabaseVmClusterNetworkScans" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkScans {
    string Hostname,
    string[] Ips,
    double Port = null,
    double ScanListenerPortTcp = null,
    double ScanListenerPortTcpSsl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.ips">Ips</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#port DatabaseVmClusterNetwork#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp_ssl DatabaseVmClusterNetwork#scan_listener_port_tcp_ssl}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.ips"></a>

```csharp
public string[] Ips { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ips DatabaseVmClusterNetwork#ips}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#port DatabaseVmClusterNetwork#port}.

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp DatabaseVmClusterNetwork#scan_listener_port_tcp}.

---

##### `ScanListenerPortTcpSsl`<sup>Optional</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScans.property.scanListenerPortTcpSsl"></a>

```csharp
public double ScanListenerPortTcpSsl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#scan_listener_port_tcp_ssl DatabaseVmClusterNetwork#scan_listener_port_tcp_ssl}.

---

### DatabaseVmClusterNetworkTimeouts <a name="DatabaseVmClusterNetworkTimeouts" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#create DatabaseVmClusterNetwork#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#delete DatabaseVmClusterNetwork#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#update DatabaseVmClusterNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#create DatabaseVmClusterNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#delete DatabaseVmClusterNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#update DatabaseVmClusterNetwork#update}.

---

### DatabaseVmClusterNetworkVmNetworks <a name="DatabaseVmClusterNetworkVmNetworks" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkVmNetworks {
    string NetworkType,
    object Nodes,
    string DomainName = null,
    string Gateway = null,
    string Netmask = null,
    string VlanId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#network_type DatabaseVmClusterNetwork#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.nodes">Nodes</a></code> | <code>object</code> | nodes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#domain_name DatabaseVmClusterNetwork#domain_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.gateway">Gateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#gateway DatabaseVmClusterNetwork#gateway}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.netmask">Netmask</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#netmask DatabaseVmClusterNetwork#netmask}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.vlanId">VlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vlan_id DatabaseVmClusterNetwork#vlan_id}. |

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#network_type DatabaseVmClusterNetwork#network_type}.

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.nodes"></a>

```csharp
public object Nodes { get; set; }
```

- *Type:* object

nodes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#nodes DatabaseVmClusterNetwork#nodes}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#domain_name DatabaseVmClusterNetwork#domain_name}.

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#gateway DatabaseVmClusterNetwork#gateway}.

---

##### `Netmask`<sup>Optional</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.netmask"></a>

```csharp
public string Netmask { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#netmask DatabaseVmClusterNetwork#netmask}.

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworks.property.vlanId"></a>

```csharp
public string VlanId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vlan_id DatabaseVmClusterNetwork#vlan_id}.

---

### DatabaseVmClusterNetworkVmNetworksNodes <a name="DatabaseVmClusterNetworkVmNetworksNodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkVmNetworksNodes {
    string Hostname,
    string Ip,
    string DbServerId = null,
    string State = null,
    string Vip = null,
    string VipHostname = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.ip">Ip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ip DatabaseVmClusterNetwork#ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.dbServerId">DbServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#db_server_id DatabaseVmClusterNetwork#db_server_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#state DatabaseVmClusterNetwork#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vip">Vip</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip DatabaseVmClusterNetwork#vip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vipHostname">VipHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip_hostname DatabaseVmClusterNetwork#vip_hostname}. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#hostname DatabaseVmClusterNetwork#hostname}.

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#ip DatabaseVmClusterNetwork#ip}.

---

##### `DbServerId`<sup>Optional</sup> <a name="DbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.dbServerId"></a>

```csharp
public string DbServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#db_server_id DatabaseVmClusterNetwork#db_server_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#state DatabaseVmClusterNetwork#state}.

---

##### `Vip`<sup>Optional</sup> <a name="Vip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vip"></a>

```csharp
public string Vip { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip DatabaseVmClusterNetwork#vip}.

---

##### `VipHostname`<sup>Optional</sup> <a name="VipHostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodes.property.vipHostname"></a>

```csharp
public string VipHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_vm_cluster_network#vip_hostname DatabaseVmClusterNetwork#vip_hostname}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseVmClusterNetworkDrScansList <a name="DatabaseVmClusterNetworkDrScansList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkDrScansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get"></a>

```csharp
private DatabaseVmClusterNetworkDrScansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkDrScansOutputReference <a name="DatabaseVmClusterNetworkDrScansOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkDrScansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ipsInput">IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ips">Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ipsInput"></a>

```csharp
public string[] IpsInput { get; }
```

- *Type:* string[]

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcpInput"></a>

```csharp
public double ScanListenerPortTcpInput { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.ips"></a>

```csharp
public string[] Ips { get; }
```

- *Type:* string[]

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkDrScansOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkScansList <a name="DatabaseVmClusterNetworkScansList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkScansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get"></a>

```csharp
private DatabaseVmClusterNetworkScansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkScansOutputReference <a name="DatabaseVmClusterNetworkScansOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkScansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcpSsl">ResetScanListenerPortTcpSsl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcp"></a>

```csharp
private void ResetScanListenerPortTcp()
```

##### `ResetScanListenerPortTcpSsl` <a name="ResetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.resetScanListenerPortTcpSsl"></a>

```csharp
private void ResetScanListenerPortTcpSsl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ipsInput">IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSslInput">ScanListenerPortTcpSslInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ips">Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ipsInput"></a>

```csharp
public string[] IpsInput { get; }
```

- *Type:* string[]

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpInput"></a>

```csharp
public double ScanListenerPortTcpInput { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpSslInput`<sup>Optional</sup> <a name="ScanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSslInput"></a>

```csharp
public double ScanListenerPortTcpSslInput { get; }
```

- *Type:* double

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.ips"></a>

```csharp
public string[] Ips { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.scanListenerPortTcpSsl"></a>

```csharp
public double ScanListenerPortTcpSsl { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkScansOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkTimeoutsOutputReference <a name="DatabaseVmClusterNetworkTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkVmNetworksList <a name="DatabaseVmClusterNetworkVmNetworksList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkVmNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get"></a>

```csharp
private DatabaseVmClusterNetworkVmNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkVmNetworksNodesList <a name="DatabaseVmClusterNetworkVmNetworksNodesList" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkVmNetworksNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get"></a>

```csharp
private DatabaseVmClusterNetworkVmNetworksNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkVmNetworksNodesOutputReference <a name="DatabaseVmClusterNetworkVmNetworksNodesOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkVmNetworksNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetDbServerId">ResetDbServerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVip">ResetVip</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVipHostname">ResetVipHostname</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbServerId` <a name="ResetDbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetDbServerId"></a>

```csharp
private void ResetDbServerId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetVip` <a name="ResetVip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVip"></a>

```csharp
private void ResetVip()
```

##### `ResetVipHostname` <a name="ResetVipHostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.resetVipHostname"></a>

```csharp
private void ResetVipHostname()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerIdInput">DbServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostnameInput">VipHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipInput">VipInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId">DbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip">Vip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname">VipHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbServerIdInput`<sup>Optional</sup> <a name="DbServerIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerIdInput"></a>

```csharp
public string DbServerIdInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `VipHostnameInput`<sup>Optional</sup> <a name="VipHostnameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostnameInput"></a>

```csharp
public string VipHostnameInput { get; }
```

- *Type:* string

---

##### `VipInput`<sup>Optional</sup> <a name="VipInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipInput"></a>

```csharp
public string VipInput { get; }
```

- *Type:* string

---

##### `DbServerId`<sup>Required</sup> <a name="DbServerId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.dbServerId"></a>

```csharp
public string DbServerId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Vip`<sup>Required</sup> <a name="Vip" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vip"></a>

```csharp
public string Vip { get; }
```

- *Type:* string

---

##### `VipHostname`<sup>Required</sup> <a name="VipHostname" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.vipHostname"></a>

```csharp
public string VipHostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseVmClusterNetworkVmNetworksOutputReference <a name="DatabaseVmClusterNetworkVmNetworksOutputReference" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseVmClusterNetworkVmNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes">PutNodes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetGateway">ResetGateway</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetNetmask">ResetNetmask</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodes` <a name="PutNodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes"></a>

```csharp
private void PutNodes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.putNodes.parameter.value"></a>

- *Type:* object

---

##### `ResetDomainName` <a name="ResetDomainName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetGateway` <a name="ResetGateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetGateway"></a>

```csharp
private void ResetGateway()
```

##### `ResetNetmask` <a name="ResetNetmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetNetmask"></a>

```csharp
private void ResetNetmask()
```

##### `ResetVlanId` <a name="ResetVlanId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.resetVlanId"></a>

```csharp
private void ResetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList">DatabaseVmClusterNetworkVmNetworksNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmaskInput">NetmaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodesInput">NodesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask">Netmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId">VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodes"></a>

```csharp
public DatabaseVmClusterNetworkVmNetworksNodesList Nodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksNodesList">DatabaseVmClusterNetworkVmNetworksNodesList</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `NetmaskInput`<sup>Optional</sup> <a name="NetmaskInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmaskInput"></a>

```csharp
public string NetmaskInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `NodesInput`<sup>Optional</sup> <a name="NodesInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.nodesInput"></a>

```csharp
public object NodesInput { get; }
```

- *Type:* object

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanIdInput"></a>

```csharp
public string VlanIdInput { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `Netmask`<sup>Required</sup> <a name="Netmask" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.netmask"></a>

```csharp
public string Netmask { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.vlanId"></a>

```csharp
public string VlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseVmClusterNetwork.DatabaseVmClusterNetworkVmNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



