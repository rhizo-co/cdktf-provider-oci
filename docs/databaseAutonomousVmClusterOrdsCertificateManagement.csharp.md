# `databaseAutonomousVmClusterOrdsCertificateManagement` Submodule <a name="`databaseAutonomousVmClusterOrdsCertificateManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagement <a name="DatabaseAutonomousVmClusterOrdsCertificateManagement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management oci_database_autonomous_vm_cluster_ords_certificate_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousVmClusterOrdsCertificateManagement(Construct Scope, string Id, DatabaseAutonomousVmClusterOrdsCertificateManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig">DatabaseAutonomousVmClusterOrdsCertificateManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig">DatabaseAutonomousVmClusterOrdsCertificateManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId">ResetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId">ResetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---

##### `ResetCaBundleId` <a name="ResetCaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId"></a>

```csharp
private void ResetCaBundleId()
```

##### `ResetCertificateAuthorityId` <a name="ResetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId"></a>

```csharp
private void ResetCertificateAuthorityId()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousVmClusterOrdsCertificateManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousVmClusterOrdsCertificateManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousVmClusterOrdsCertificateManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DatabaseAutonomousVmClusterOrdsCertificateManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousVmClusterOrdsCertificateManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousVmClusterOrdsCertificateManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousVmClusterOrdsCertificateManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput">AutonomousVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput">CaBundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput">CertificateAuthorityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput">CertificateGenerationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId">CaBundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts"></a>

```csharp
public DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a>

---

##### `AutonomousVmClusterIdInput`<sup>Optional</sup> <a name="AutonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput"></a>

```csharp
public string AutonomousVmClusterIdInput { get; }
```

- *Type:* string

---

##### `CaBundleIdInput`<sup>Optional</sup> <a name="CaBundleIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput"></a>

```csharp
public string CaBundleIdInput { get; }
```

- *Type:* string

---

##### `CertificateAuthorityIdInput`<sup>Optional</sup> <a name="CertificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput"></a>

```csharp
public string CertificateAuthorityIdInput { get; }
```

- *Type:* string

---

##### `CertificateGenerationTypeInput`<sup>Optional</sup> <a name="CertificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput"></a>

```csharp
public string CertificateGenerationTypeInput { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; }
```

- *Type:* string

---

##### `CaBundleId`<sup>Required</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId"></a>

```csharp
public string CaBundleId { get; }
```

- *Type:* string

---

##### `CertificateAuthorityId`<sup>Required</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; }
```

- *Type:* string

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType"></a>

```csharp
public string CertificateGenerationType { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementConfig <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousVmClusterOrdsCertificateManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousVmClusterId,
    string CertificateGenerationType,
    string CaBundleId = null,
    string CertificateAuthorityId = null,
    string CertificateId = null,
    string Id = null,
    DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId">AutonomousVmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId">CaBundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId">CertificateAuthorityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId">CertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousVmClusterId`<sup>Required</sup> <a name="AutonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId"></a>

```csharp
public string AutonomousVmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}.

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType"></a>

```csharp
public string CertificateGenerationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}.

---

##### `CaBundleId`<sup>Optional</sup> <a name="CaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId"></a>

```csharp
public string CaBundleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}.

---

##### `CertificateAuthorityId`<sup>Optional</sup> <a name="CertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId"></a>

```csharp
public string CertificateAuthorityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}.

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts"></a>

```csharp
public DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#timeouts DatabaseAutonomousVmClusterOrdsCertificateManagement#timeouts}

---

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



