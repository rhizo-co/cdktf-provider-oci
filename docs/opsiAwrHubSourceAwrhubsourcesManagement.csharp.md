# `opsiAwrHubSourceAwrhubsourcesManagement` Submodule <a name="`opsiAwrHubSourceAwrhubsourcesManagement` Submodule" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiAwrHubSourceAwrhubsourcesManagement <a name="OpsiAwrHubSourceAwrhubsourcesManagement" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management oci_opsi_awr_hub_source_awrhubsources_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiAwrHubSourceAwrhubsourcesManagement(Construct Scope, string Id, OpsiAwrHubSourceAwrhubsourcesManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig">OpsiAwrHubSourceAwrhubsourcesManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig">OpsiAwrHubSourceAwrhubsourcesManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.putTimeouts"></a>

```csharp
private void PutTimeouts(OpsiAwrHubSourceAwrhubsourcesManagementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts">OpsiAwrHubSourceAwrhubsourcesManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiAwrHubSourceAwrhubsourcesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiAwrHubSourceAwrhubsourcesManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiAwrHubSourceAwrhubsourcesManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiAwrHubSourceAwrhubsourcesManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

OpsiAwrHubSourceAwrhubsourcesManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpsiAwrHubSourceAwrhubsourcesManagement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiAwrHubSourceAwrhubsourcesManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiAwrHubSourceAwrhubsourcesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpsiAwrHubSourceAwrhubsourcesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference">OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceIdInput">AwrHubSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsourceInput">EnableAwrhubsourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceId">AwrHubSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsource">EnableAwrhubsource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeouts"></a>

```csharp
public OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference">OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference</a>

---

##### `AwrHubSourceIdInput`<sup>Optional</sup> <a name="AwrHubSourceIdInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceIdInput"></a>

```csharp
public string AwrHubSourceIdInput { get; }
```

- *Type:* string

---

##### `EnableAwrhubsourceInput`<sup>Optional</sup> <a name="EnableAwrhubsourceInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsourceInput"></a>

```csharp
public object EnableAwrhubsourceInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AwrHubSourceId`<sup>Required</sup> <a name="AwrHubSourceId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.awrHubSourceId"></a>

```csharp
public string AwrHubSourceId { get; }
```

- *Type:* string

---

##### `EnableAwrhubsource`<sup>Required</sup> <a name="EnableAwrhubsource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.enableAwrhubsource"></a>

```csharp
public object EnableAwrhubsource { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiAwrHubSourceAwrhubsourcesManagementConfig <a name="OpsiAwrHubSourceAwrhubsourcesManagementConfig" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiAwrHubSourceAwrhubsourcesManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AwrHubSourceId,
    object EnableAwrhubsource,
    string Id = null,
    OpsiAwrHubSourceAwrhubsourcesManagementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.awrHubSourceId">AwrHubSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#awr_hub_source_id OpsiAwrHubSourceAwrhubsourcesManagement#awr_hub_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.enableAwrhubsource">EnableAwrhubsource</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#enable_awrhubsource OpsiAwrHubSourceAwrhubsourcesManagement#enable_awrhubsource}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#id OpsiAwrHubSourceAwrhubsourcesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts">OpsiAwrHubSourceAwrhubsourcesManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AwrHubSourceId`<sup>Required</sup> <a name="AwrHubSourceId" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.awrHubSourceId"></a>

```csharp
public string AwrHubSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#awr_hub_source_id OpsiAwrHubSourceAwrhubsourcesManagement#awr_hub_source_id}.

---

##### `EnableAwrhubsource`<sup>Required</sup> <a name="EnableAwrhubsource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.enableAwrhubsource"></a>

```csharp
public object EnableAwrhubsource { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#enable_awrhubsource OpsiAwrHubSourceAwrhubsourcesManagement#enable_awrhubsource}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#id OpsiAwrHubSourceAwrhubsourcesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementConfig.property.timeouts"></a>

```csharp
public OpsiAwrHubSourceAwrhubsourcesManagementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts">OpsiAwrHubSourceAwrhubsourcesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#timeouts OpsiAwrHubSourceAwrhubsourcesManagement#timeouts}

---

### OpsiAwrHubSourceAwrhubsourcesManagementTimeouts <a name="OpsiAwrHubSourceAwrhubsourcesManagementTimeouts" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiAwrHubSourceAwrhubsourcesManagementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#create OpsiAwrHubSourceAwrhubsourcesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#delete OpsiAwrHubSourceAwrhubsourcesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#update OpsiAwrHubSourceAwrhubsourcesManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#create OpsiAwrHubSourceAwrhubsourcesManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#delete OpsiAwrHubSourceAwrhubsourcesManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_awr_hub_source_awrhubsources_management#update OpsiAwrHubSourceAwrhubsourcesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference <a name="OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.opsiAwrHubSourceAwrhubsourcesManagement.OpsiAwrHubSourceAwrhubsourcesManagementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



