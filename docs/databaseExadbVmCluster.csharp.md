# `databaseExadbVmCluster` Submodule <a name="`databaseExadbVmCluster` Submodule" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExadbVmCluster <a name="DatabaseExadbVmCluster" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster oci_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmCluster(Construct Scope, string Id, DatabaseExadbVmClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig">DatabaseExadbVmClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig">DatabaseExadbVmClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions">PutDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig">PutNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource">PutNodeResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetBackupNetworkNsgIds">ResetBackupNetworkNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDataCollectionOptions">ResetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetLicenseModel">ResetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNodeResource">ResetNodeResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetPrivateZoneId">ResetPrivateZoneId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcp">ResetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcpSsl">ResetScanListenerPortTcpSsl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSecurityAttributes">ResetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSystemVersion">ResetSystemVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataCollectionOptions` <a name="PutDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions"></a>

```csharp
private void PutDataCollectionOptions(DatabaseExadbVmClusterDataCollectionOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---

##### `PutNodeConfig` <a name="PutNodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig"></a>

```csharp
private void PutNodeConfig(DatabaseExadbVmClusterNodeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---

##### `PutNodeResource` <a name="PutNodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource"></a>

```csharp
private void PutNodeResource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putNodeResource.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseExadbVmClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

---

##### `ResetBackupNetworkNsgIds` <a name="ResetBackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetBackupNetworkNsgIds"></a>

```csharp
private void ResetBackupNetworkNsgIds()
```

##### `ResetClusterName` <a name="ResetClusterName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetDataCollectionOptions` <a name="ResetDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDataCollectionOptions"></a>

```csharp
private void ResetDataCollectionOptions()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDomain` <a name="ResetDomain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLicenseModel` <a name="ResetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetLicenseModel"></a>

```csharp
private void ResetLicenseModel()
```

##### `ResetNodeResource` <a name="ResetNodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNodeResource"></a>

```csharp
private void ResetNodeResource()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPrivateZoneId` <a name="ResetPrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetPrivateZoneId"></a>

```csharp
private void ResetPrivateZoneId()
```

##### `ResetScanListenerPortTcp` <a name="ResetScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcp"></a>

```csharp
private void ResetScanListenerPortTcp()
```

##### `ResetScanListenerPortTcpSsl` <a name="ResetScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetScanListenerPortTcpSsl"></a>

```csharp
private void ResetScanListenerPortTcpSsl()
```

##### `ResetSecurityAttributes` <a name="ResetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSecurityAttributes"></a>

```csharp
private void ResetSecurityAttributes()
```

##### `ResetSystemVersion` <a name="ResetSystemVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetSystemVersion"></a>

```csharp
private void ResetSystemVersion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadbVmCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadbVmCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadbVmCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseExadbVmCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseExadbVmCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseExadbVmCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference">DatabaseExadbVmClusterDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.giVersion">GiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageType">GridImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.iormConfigCache">IormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList">DatabaseExadbVmClusterIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lastUpdateHistoryEntryId">LastUpdateHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.listenerPort">ListenerPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfig">NodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference">DatabaseExadbVmClusterNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResource">NodeResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList">DatabaseExadbVmClusterNodeResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsName">ScanDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsRecordId">ScanDnsRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanIpIds">ScanIpIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference">DatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.vipIds">VipIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIdsInput">BackupNetworkNsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetIdInput">BackupSubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptionsInput">DataCollectionOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultIdInput">ExascaleDbStorageVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageIdInput">GridImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfigInput">NodeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResourceInput">NodeResourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneIdInput">PrivateZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpInput">ScanListenerPortTcpInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSslInput">ScanListenerPortTcpSslInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributesInput">SecurityAttributesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersionInput">SystemVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetId">BackupSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageId">GridImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneId">PrivateZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersion">SystemVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataCollectionOptions`<sup>Required</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptions"></a>

```csharp
public DatabaseExadbVmClusterDataCollectionOptionsOutputReference DataCollectionOptions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference">DatabaseExadbVmClusterDataCollectionOptionsOutputReference</a>

---

##### `GiVersion`<sup>Required</sup> <a name="GiVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.giVersion"></a>

```csharp
public string GiVersion { get; }
```

- *Type:* string

---

##### `GridImageType`<sup>Required</sup> <a name="GridImageType" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageType"></a>

```csharp
public string GridImageType { get; }
```

- *Type:* string

---

##### `IormConfigCache`<sup>Required</sup> <a name="IormConfigCache" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.iormConfigCache"></a>

```csharp
public DatabaseExadbVmClusterIormConfigCacheList IormConfigCache { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList">DatabaseExadbVmClusterIormConfigCacheList</a>

---

##### `LastUpdateHistoryEntryId`<sup>Required</sup> <a name="LastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lastUpdateHistoryEntryId"></a>

```csharp
public string LastUpdateHistoryEntryId { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.listenerPort"></a>

```csharp
public string ListenerPort { get; }
```

- *Type:* string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfig"></a>

```csharp
public DatabaseExadbVmClusterNodeConfigOutputReference NodeConfig { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference">DatabaseExadbVmClusterNodeConfigOutputReference</a>

---

##### `NodeResource`<sup>Required</sup> <a name="NodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResource"></a>

```csharp
public DatabaseExadbVmClusterNodeResourceList NodeResource { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList">DatabaseExadbVmClusterNodeResourceList</a>

---

##### `ScanDnsName`<sup>Required</sup> <a name="ScanDnsName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsName"></a>

```csharp
public string ScanDnsName { get; }
```

- *Type:* string

---

##### `ScanDnsRecordId`<sup>Required</sup> <a name="ScanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanDnsRecordId"></a>

```csharp
public string ScanDnsRecordId { get; }
```

- *Type:* string

---

##### `ScanIpIds`<sup>Required</sup> <a name="ScanIpIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanIpIds"></a>

```csharp
public string[] ScanIpIds { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeouts"></a>

```csharp
public DatabaseExadbVmClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference">DatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `VipIds`<sup>Required</sup> <a name="VipIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.vipIds"></a>

```csharp
public string[] VipIds { get; }
```

- *Type:* string[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomainInput"></a>

```csharp
public string AvailabilityDomainInput { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIdsInput`<sup>Optional</sup> <a name="BackupNetworkNsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIdsInput"></a>

```csharp
public string[] BackupNetworkNsgIdsInput { get; }
```

- *Type:* string[]

---

##### `BackupSubnetIdInput`<sup>Optional</sup> <a name="BackupSubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetIdInput"></a>

```csharp
public string BackupSubnetIdInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DataCollectionOptionsInput`<sup>Optional</sup> <a name="DataCollectionOptionsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.dataCollectionOptionsInput"></a>

```csharp
public DatabaseExadbVmClusterDataCollectionOptions DataCollectionOptionsInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `ExascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="ExascaleDbStorageVaultIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultIdInput"></a>

```csharp
public string ExascaleDbStorageVaultIdInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GridImageIdInput`<sup>Optional</sup> <a name="GridImageIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageIdInput"></a>

```csharp
public string GridImageIdInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `NodeConfigInput`<sup>Optional</sup> <a name="NodeConfigInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeConfigInput"></a>

```csharp
public DatabaseExadbVmClusterNodeConfig NodeConfigInput { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---

##### `NodeResourceInput`<sup>Optional</sup> <a name="NodeResourceInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nodeResourceInput"></a>

```csharp
public object NodeResourceInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PrivateZoneIdInput`<sup>Optional</sup> <a name="PrivateZoneIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneIdInput"></a>

```csharp
public string PrivateZoneIdInput { get; }
```

- *Type:* string

---

##### `ScanListenerPortTcpInput`<sup>Optional</sup> <a name="ScanListenerPortTcpInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpInput"></a>

```csharp
public double ScanListenerPortTcpInput { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpSslInput`<sup>Optional</sup> <a name="ScanListenerPortTcpSslInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSslInput"></a>

```csharp
public double ScanListenerPortTcpSslInput { get; }
```

- *Type:* double

---

##### `SecurityAttributesInput`<sup>Optional</sup> <a name="SecurityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `SystemVersionInput`<sup>Optional</sup> <a name="SystemVersionInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersionInput"></a>

```csharp
public string SystemVersionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `BackupNetworkNsgIds`<sup>Required</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; }
```

- *Type:* string[]

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.backupSubnetId"></a>

```csharp
public string BackupSubnetId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.exascaleDbStorageVaultId"></a>

```csharp
public string ExascaleDbStorageVaultId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.gridImageId"></a>

```csharp
public string GridImageId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `PrivateZoneId`<sup>Required</sup> <a name="PrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.privateZoneId"></a>

```csharp
public string PrivateZoneId { get; }
```

- *Type:* string

---

##### `ScanListenerPortTcp`<sup>Required</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; }
```

- *Type:* double

---

##### `ScanListenerPortTcpSsl`<sup>Required</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.scanListenerPortTcpSsl"></a>

```csharp
public double ScanListenerPortTcpSsl { get; }
```

- *Type:* double

---

##### `SecurityAttributes`<sup>Required</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemVersion`<sup>Required</sup> <a name="SystemVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.systemVersion"></a>

```csharp
public string SystemVersion { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExadbVmClusterConfig <a name="DatabaseExadbVmClusterConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityDomain,
    string BackupSubnetId,
    string CompartmentId,
    string DisplayName,
    string ExascaleDbStorageVaultId,
    string GridImageId,
    string Hostname,
    DatabaseExadbVmClusterNodeConfig NodeConfig,
    string Shape,
    string[] SshPublicKeys,
    string SubnetId,
    string[] BackupNetworkNsgIds = null,
    string ClusterName = null,
    DatabaseExadbVmClusterDataCollectionOptions DataCollectionOptions = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string Domain = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Id = null,
    string LicenseModel = null,
    object NodeResource = null,
    string[] NsgIds = null,
    string PrivateZoneId = null,
    double ScanListenerPortTcp = null,
    double ScanListenerPortTcpSsl = null,
    System.Collections.Generic.IDictionary<string, string> SecurityAttributes = null,
    string SystemVersion = null,
    DatabaseExadbVmClusterTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupSubnetId">BackupSubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.gridImageId">GridImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeConfig">NodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | node_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupNetworkNsgIds">BackupNetworkNsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dataCollectionOptions">DataCollectionOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeResource">NodeResource</a></code> | <code>object</code> | node_resource block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.privateZoneId">PrivateZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcp">ScanListenerPortTcp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcpSsl">ScanListenerPortTcpSsl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.securityAttributes">SecurityAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.systemVersion">SystemVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#availability_domain DatabaseExadbVmCluster#availability_domain}.

---

##### `BackupSubnetId`<sup>Required</sup> <a name="BackupSubnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupSubnetId"></a>

```csharp
public string BackupSubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_subnet_id DatabaseExadbVmCluster#backup_subnet_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#compartment_id DatabaseExadbVmCluster#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#display_name DatabaseExadbVmCluster#display_name}.

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.exascaleDbStorageVaultId"></a>

```csharp
public string ExascaleDbStorageVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#exascale_db_storage_vault_id DatabaseExadbVmCluster#exascale_db_storage_vault_id}.

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.gridImageId"></a>

```csharp
public string GridImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#grid_image_id DatabaseExadbVmCluster#grid_image_id}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#hostname DatabaseExadbVmCluster#hostname}.

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeConfig"></a>

```csharp
public DatabaseExadbVmClusterNodeConfig NodeConfig { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_config DatabaseExadbVmCluster#node_config}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#shape DatabaseExadbVmCluster#shape}.

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#ssh_public_keys DatabaseExadbVmCluster#ssh_public_keys}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#subnet_id DatabaseExadbVmCluster#subnet_id}.

---

##### `BackupNetworkNsgIds`<sup>Optional</sup> <a name="BackupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.backupNetworkNsgIds"></a>

```csharp
public string[] BackupNetworkNsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#backup_network_nsg_ids DatabaseExadbVmCluster#backup_network_nsg_ids}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#cluster_name DatabaseExadbVmCluster#cluster_name}.

---

##### `DataCollectionOptions`<sup>Optional</sup> <a name="DataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.dataCollectionOptions"></a>

```csharp
public DatabaseExadbVmClusterDataCollectionOptions DataCollectionOptions { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#data_collection_options DatabaseExadbVmCluster#data_collection_options}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#defined_tags DatabaseExadbVmCluster#defined_tags}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#domain DatabaseExadbVmCluster#domain}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#freeform_tags DatabaseExadbVmCluster#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#id DatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LicenseModel`<sup>Optional</sup> <a name="LicenseModel" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#license_model DatabaseExadbVmCluster#license_model}.

---

##### `NodeResource`<sup>Optional</sup> <a name="NodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nodeResource"></a>

```csharp
public object NodeResource { get; set; }
```

- *Type:* object

node_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_resource DatabaseExadbVmCluster#node_resource}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#nsg_ids DatabaseExadbVmCluster#nsg_ids}.

---

##### `PrivateZoneId`<sup>Optional</sup> <a name="PrivateZoneId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.privateZoneId"></a>

```csharp
public string PrivateZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#private_zone_id DatabaseExadbVmCluster#private_zone_id}.

---

##### `ScanListenerPortTcp`<sup>Optional</sup> <a name="ScanListenerPortTcp" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcp"></a>

```csharp
public double ScanListenerPortTcp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp DatabaseExadbVmCluster#scan_listener_port_tcp}.

---

##### `ScanListenerPortTcpSsl`<sup>Optional</sup> <a name="ScanListenerPortTcpSsl" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.scanListenerPortTcpSsl"></a>

```csharp
public double ScanListenerPortTcpSsl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#scan_listener_port_tcp_ssl DatabaseExadbVmCluster#scan_listener_port_tcp_ssl}.

---

##### `SecurityAttributes`<sup>Optional</sup> <a name="SecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.securityAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityAttributes { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#security_attributes DatabaseExadbVmCluster#security_attributes}.

---

##### `SystemVersion`<sup>Optional</sup> <a name="SystemVersion" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.systemVersion"></a>

```csharp
public string SystemVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#system_version DatabaseExadbVmCluster#system_version}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeouts"></a>

```csharp
public DatabaseExadbVmClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts">DatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#timeouts DatabaseExadbVmCluster#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#time_zone DatabaseExadbVmCluster#time_zone}.

---

### DatabaseExadbVmClusterDataCollectionOptions <a name="DatabaseExadbVmClusterDataCollectionOptions" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterDataCollectionOptions {
    object IsDiagnosticsEventsEnabled = null,
    object IsHealthMonitoringEnabled = null,
    object IsIncidentLogsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}. |

---

##### `IsDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```csharp
public object IsDiagnosticsEventsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_diagnostics_events_enabled DatabaseExadbVmCluster#is_diagnostics_events_enabled}.

---

##### `IsHealthMonitoringEnabled`<sup>Optional</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```csharp
public object IsHealthMonitoringEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_health_monitoring_enabled DatabaseExadbVmCluster#is_health_monitoring_enabled}.

---

##### `IsIncidentLogsEnabled`<sup>Optional</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```csharp
public object IsIncidentLogsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#is_incident_logs_enabled DatabaseExadbVmCluster#is_incident_logs_enabled}.

---

### DatabaseExadbVmClusterIormConfigCache <a name="DatabaseExadbVmClusterIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterIormConfigCache {

};
```


### DatabaseExadbVmClusterIormConfigCacheDbPlans <a name="DatabaseExadbVmClusterIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterIormConfigCacheDbPlans {

};
```


### DatabaseExadbVmClusterNodeConfig <a name="DatabaseExadbVmClusterNodeConfig" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterNodeConfig {
    double EnabledEcpuCountPerNode,
    double TotalEcpuCountPerNode,
    double VmFileSystemStorageSizeGbsPerNode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.totalEcpuCountPerNode">TotalEcpuCountPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.vmFileSystemStorageSizeGbsPerNode">VmFileSystemStorageSizeGbsPerNode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}. |

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.enabledEcpuCountPerNode"></a>

```csharp
public double EnabledEcpuCountPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#enabled_ecpu_count_per_node DatabaseExadbVmCluster#enabled_ecpu_count_per_node}.

---

##### `TotalEcpuCountPerNode`<sup>Required</sup> <a name="TotalEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.totalEcpuCountPerNode"></a>

```csharp
public double TotalEcpuCountPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#total_ecpu_count_per_node DatabaseExadbVmCluster#total_ecpu_count_per_node}.

---

##### `VmFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="VmFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig.property.vmFileSystemStorageSizeGbsPerNode"></a>

```csharp
public double VmFileSystemStorageSizeGbsPerNode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#vm_file_system_storage_size_gbs_per_node DatabaseExadbVmCluster#vm_file_system_storage_size_gbs_per_node}.

---

### DatabaseExadbVmClusterNodeResource <a name="DatabaseExadbVmClusterNodeResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterNodeResource {
    string NodeName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.property.nodeName">NodeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_name DatabaseExadbVmCluster#node_name}. |

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResource.property.nodeName"></a>

```csharp
public string NodeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#node_name DatabaseExadbVmCluster#node_name}.

---

### DatabaseExadbVmClusterTimeouts <a name="DatabaseExadbVmClusterTimeouts" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#create DatabaseExadbVmCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#delete DatabaseExadbVmCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exadb_vm_cluster#update DatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExadbVmClusterDataCollectionOptionsOutputReference <a name="DatabaseExadbVmClusterDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterDataCollectionOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">ResetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">ResetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">ResetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsDiagnosticsEventsEnabled` <a name="ResetIsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```csharp
private void ResetIsDiagnosticsEventsEnabled()
```

##### `ResetIsHealthMonitoringEnabled` <a name="ResetIsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```csharp
private void ResetIsHealthMonitoringEnabled()
```

##### `ResetIsIncidentLogsEnabled` <a name="ResetIsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```csharp
private void ResetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">IsDiagnosticsEventsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">IsHealthMonitoringEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">IsIncidentLogsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">IsDiagnosticsEventsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">IsHealthMonitoringEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">IsIncidentLogsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="IsDiagnosticsEventsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```csharp
public object IsDiagnosticsEventsEnabledInput { get; }
```

- *Type:* object

---

##### `IsHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="IsHealthMonitoringEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```csharp
public object IsHealthMonitoringEnabledInput { get; }
```

- *Type:* object

---

##### `IsIncidentLogsEnabledInput`<sup>Optional</sup> <a name="IsIncidentLogsEnabledInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```csharp
public object IsIncidentLogsEnabledInput { get; }
```

- *Type:* object

---

##### `IsDiagnosticsEventsEnabled`<sup>Required</sup> <a name="IsDiagnosticsEventsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```csharp
public object IsDiagnosticsEventsEnabled { get; }
```

- *Type:* object

---

##### `IsHealthMonitoringEnabled`<sup>Required</sup> <a name="IsHealthMonitoringEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```csharp
public object IsHealthMonitoringEnabled { get; }
```

- *Type:* object

---

##### `IsIncidentLogsEnabled`<sup>Required</sup> <a name="IsIncidentLogsEnabled" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```csharp
public object IsIncidentLogsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptionsOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadbVmClusterDataCollectionOptions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterDataCollectionOptions">DatabaseExadbVmClusterDataCollectionOptions</a>

---


### DatabaseExadbVmClusterIormConfigCacheDbPlansList <a name="DatabaseExadbVmClusterIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterIormConfigCacheDbPlansList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get"></a>

```csharp
private DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference <a name="DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.dbName">DbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">FlashCacheLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.share">Share</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans">DatabaseExadbVmClusterIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbName`<sup>Required</sup> <a name="DbName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```csharp
public string DbName { get; }
```

- *Type:* string

---

##### `FlashCacheLimit`<sup>Required</sup> <a name="FlashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```csharp
public string FlashCacheLimit { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.share"></a>

```csharp
public double Share { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadbVmClusterIormConfigCacheDbPlans InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlans">DatabaseExadbVmClusterIormConfigCacheDbPlans</a>

---


### DatabaseExadbVmClusterIormConfigCacheList <a name="DatabaseExadbVmClusterIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterIormConfigCacheList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get"></a>

```csharp
private DatabaseExadbVmClusterIormConfigCacheOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseExadbVmClusterIormConfigCacheOutputReference <a name="DatabaseExadbVmClusterIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterIormConfigCacheOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.dbPlans">DbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList">DatabaseExadbVmClusterIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.objective">Objective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache">DatabaseExadbVmClusterIormConfigCache</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbPlans`<sup>Required</sup> <a name="DbPlans" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.dbPlans"></a>

```csharp
public DatabaseExadbVmClusterIormConfigCacheDbPlansList DbPlans { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheDbPlansList">DatabaseExadbVmClusterIormConfigCacheDbPlansList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Objective`<sup>Required</sup> <a name="Objective" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.objective"></a>

```csharp
public string Objective { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCacheOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadbVmClusterIormConfigCache InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterIormConfigCache">DatabaseExadbVmClusterIormConfigCache</a>

---


### DatabaseExadbVmClusterNodeConfigOutputReference <a name="DatabaseExadbVmClusterNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.memorySizeInGbsPerNode">MemorySizeInGbsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode">SnapshotFileSystemStorageSizeGbsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode">TotalFileSystemStorageSizeGbsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNodeInput">EnabledEcpuCountPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNodeInput">TotalEcpuCountPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNodeInput">VmFileSystemStorageSizeGbsPerNodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNode">EnabledEcpuCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNode">TotalEcpuCountPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode">VmFileSystemStorageSizeGbsPerNode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MemorySizeInGbsPerNode`<sup>Required</sup> <a name="MemorySizeInGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.memorySizeInGbsPerNode"></a>

```csharp
public double MemorySizeInGbsPerNode { get; }
```

- *Type:* double

---

##### `SnapshotFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="SnapshotFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.snapshotFileSystemStorageSizeGbsPerNode"></a>

```csharp
public double SnapshotFileSystemStorageSizeGbsPerNode { get; }
```

- *Type:* double

---

##### `TotalFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="TotalFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalFileSystemStorageSizeGbsPerNode"></a>

```csharp
public double TotalFileSystemStorageSizeGbsPerNode { get; }
```

- *Type:* double

---

##### `EnabledEcpuCountPerNodeInput`<sup>Optional</sup> <a name="EnabledEcpuCountPerNodeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```csharp
public double EnabledEcpuCountPerNodeInput { get; }
```

- *Type:* double

---

##### `TotalEcpuCountPerNodeInput`<sup>Optional</sup> <a name="TotalEcpuCountPerNodeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNodeInput"></a>

```csharp
public double TotalEcpuCountPerNodeInput { get; }
```

- *Type:* double

---

##### `VmFileSystemStorageSizeGbsPerNodeInput`<sup>Optional</sup> <a name="VmFileSystemStorageSizeGbsPerNodeInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNodeInput"></a>

```csharp
public double VmFileSystemStorageSizeGbsPerNodeInput { get; }
```

- *Type:* double

---

##### `EnabledEcpuCountPerNode`<sup>Required</sup> <a name="EnabledEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.enabledEcpuCountPerNode"></a>

```csharp
public double EnabledEcpuCountPerNode { get; }
```

- *Type:* double

---

##### `TotalEcpuCountPerNode`<sup>Required</sup> <a name="TotalEcpuCountPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.totalEcpuCountPerNode"></a>

```csharp
public double TotalEcpuCountPerNode { get; }
```

- *Type:* double

---

##### `VmFileSystemStorageSizeGbsPerNode`<sup>Required</sup> <a name="VmFileSystemStorageSizeGbsPerNode" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.vmFileSystemStorageSizeGbsPerNode"></a>

```csharp
public double VmFileSystemStorageSizeGbsPerNode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseExadbVmClusterNodeConfig InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeConfig">DatabaseExadbVmClusterNodeConfig</a>

---


### DatabaseExadbVmClusterNodeResourceList <a name="DatabaseExadbVmClusterNodeResourceList" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterNodeResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get"></a>

```csharp
private DatabaseExadbVmClusterNodeResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadbVmClusterNodeResourceOutputReference <a name="DatabaseExadbVmClusterNodeResourceOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterNodeResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeHostname">NodeHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeNameInput">NodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeHostname`<sup>Required</sup> <a name="NodeHostname" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeHostname"></a>

```csharp
public string NodeHostname { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NodeNameInput`<sup>Optional</sup> <a name="NodeNameInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeNameInput"></a>

```csharp
public string NodeNameInput { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterNodeResourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseExadbVmClusterTimeoutsOutputReference <a name="DatabaseExadbVmClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseExadbVmClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseExadbVmCluster.DatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



